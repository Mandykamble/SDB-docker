//i. Student Name : Text
// ii. Student ID : Text
// iii. Course : Dropdown (Dropdown values : React JS, Node JS, Mongo DB, PostgreSQL, MySQL, SQLite)
// iv. Fees : Numeric
// v. Couse Start : Date Time
// vi. Course End : Date Time

// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

const Studentschema = new mongoose.Schema({
  Sname: {
    type: String,
    required: [true, "Please provide your name"],
  },

  _id: {
    type: String,
    required: [true, "Please provide your ID"],
  },

  Cource: {
    type: String,
    required: [true, "Please provide your Cource"],
  },

  Fees: {
    type: Number,
    required: [true, "Please provide your Fees"],
  },

  Startdate: {
    type: Date,
    required: [true, "Please provide your Sdate"],
  },

  Enddate: {
    type: Date,
    required: [true, "Please provide your Edate"],
  },
  Duration: {
    type: String,
  },
});

const Student = mongoose.model("Student", Studentschema);

// eslint-disable-next-line no-undef
module.exports = Student;
