/* eslint-disable no-undef */

const express = require("express");
const {
  getStudent,
  postStudent,
  getuser,
  updateuser,
  deleteuser,
} = require("../Controller/student.js");

const router = express.Router();

router.get("/", getStudent);
router.get("/getuser/:id", getuser);
router.post("/", postStudent);
router.put("/updateuser/:id", updateuser);
router.delete("/deleteuser/:id", deleteuser);

module.exports = router;
