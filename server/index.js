/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const StudentRoute = require("./Routes/student.js");
const port = 4000;

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// eslint-disable-next-line no-undef
const mongoDBURI = process.env.MYMONGOurl;
mongoose.connect(mongoDBURI);
console.log(mongoose.connection.readyState);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/students/", StudentRoute);

app.get("/", (req, res) => {
  res.send("Hello from mandar !");
});

app.listen(port, () =>
  console.log(`The site is on port  http://localhost:${port}`)
);
