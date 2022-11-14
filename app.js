const express = require("express");
const app = express();
// const studentRoute = require("./api/routes/user");
// const facultyRoute = require("./api/routes/faculty");
const userRouter = require("./api/route/user");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://saumyxa:root@cluster0.qpakkuq.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (err) => {
  console.log("connected with database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/student',studentRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "bad url",
  });
});
module.exports = app;
