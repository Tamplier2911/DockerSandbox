// express
const express = require("express");
const cors = require("cors");

// postgress
const { Pool } = require("pg");

// redis
const redis = require("redis");

// Express App Setup
const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json({ limit: "10bk" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Postgress Setup
const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pgClient.on("error", (err) => {
  console.log("Error fron PG on!", err.name, err.message);
});

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((err) => {
    console.log("Error from PG query!", err.name, err.message);
  });

// Redis setup
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

const redisPublisher = redisClient.duplicate();

// Express routes
app.get("/", (req, res, next) => {
  res.send("Working properly!");
});

app.get("/values/all", async (req, res, next) => {
  const values = await pgClient.query("SELECT * from values");
  res.send(values.rows);
});

app.get("/values/current", async (req, res, next) => {
  redisClient.hgetall("values", (err, values) => {
    if (err) return console.log("Error!", err.name, err.values);
    res.send(values);
  });
});

app.post("/values", async (req, res, next) => {
  const { index } = req.body;

  if (Number(index) > 40) {
    return res.status(422).send("Index is too high!");
  }

  // get index and set it in values of redis as empty str
  redisClient.hset("values", index, "");
  // send index to another redis client
  redisPublisher.publish("insert", index);
  // insert submited index into postgress db
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  res.status(200).json({
    status: "success",
    working: true,
  });
});

module.exports = app;
