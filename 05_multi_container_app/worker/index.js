const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

const fib = (n) => {
  const table = [0, 1];
  for (let i = 2; i <= n; i++) {
    table.push(table[i - 2] + table[i - 1]);
  }
  return table[n];
};

sub.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(Number(message)));
});

sub.subscribe("insert");
