const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server", // <-- container name
  port: 6379, // <-- default port
});

client.on("error", function (error) {
  console.error(error);
});

client.set("serverVisited", 0);

app.get("*", (req, res, next) => {
  client.get("serverVisited", (err, n) => {
    if (err) return res.status(400).json({ status: "fail", data: err.message });
    const data = {
      engines: { node: "12.9.1", npm: "6.11.2" },
      visits: parseInt(n),
    };
    client.set("serverVisited", parseInt(n) + 1);
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
});

module.exports = app;
