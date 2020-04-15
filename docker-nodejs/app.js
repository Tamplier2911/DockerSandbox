const express = require("express");
const app = express();

app.get("*", (req, res, next) => {
  const dataJSON = { name: "Thomas", age: 30 };
  res.status(200).json({
    status: "success",
    data: dataJSON,
  });
  // res.send('Hello, Dockerino!');
});

module.exports = app;
