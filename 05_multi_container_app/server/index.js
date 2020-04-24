process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// process.env.REDIS_HOST;
// process.env.REDIS_PORT;
// process.env.PGUSER;
// process.env.PGHOST;
// process.env.PGPORT;
// process.env.PGDATABASE;
// process.env.PGPASSWORD;
