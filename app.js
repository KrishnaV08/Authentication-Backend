const express = require("express");
const app = express();
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");
const mongoose = require("mongoose");

mongoose.connect();

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (err) => {
  console.log("connected with database");
});

app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);

app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});
app.use((req, res, next) => {
  res.status(200).json({
    message: "app is running",
  });
});

module.exports = app;
