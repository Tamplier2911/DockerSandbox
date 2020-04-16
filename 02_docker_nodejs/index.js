// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/ ...`);
});

// Handle Unhandled Rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

/*
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "application/json" });
  const someJSON = JSON.stringify({ name: "Thomas", age: 30 });
  res.end(someJSON);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT);
*/
