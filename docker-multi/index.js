const app = require("./app");

const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

const server = app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `Express server is up and running on http://192.168.99.100:${PORT}/`
  );
});

process.on("unhandledRejection", (err) => {
  if (err) {
    console.log("UNHANDLED REJECTION", err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  }
});
