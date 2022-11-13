//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

app.get("/logout", auth, async (req, res) => {
  try {
    console.log("logout successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
