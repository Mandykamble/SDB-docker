// eslint-disable-next-line no-undef
const Student = require("../Models/student.js");

// eslint-disable-next-line no-undef
exports.postStudent = async (req, res) => {
  // console.log(req.body);

  try {
    const newStudent = new Student(req.body);

    var date1 = new Date(req.body.Startdate);
    var date2 = new Date(req.body.Enddate);
    var timeDiff = Math.abs(date2 - date1);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // console.log(diffDays);
    var weeks = Math.round(diffDays / 7);
    var hours = diffDays * 24;

    // console.log(`Dear ${req.body.Sname} you will require ${diffDays} days, ${weeks} weeks,${hours} hours,${miniutes} miniutes, ${seconds} seconds to complete the cource`);
    var dur = `${diffDays} days, ${weeks} weeks,${hours} hours`;
    newStudent.Duration = dur;

    // if (
    //   !req.body.Sname.trim() ||
    //   !req.body.Sid.trim() ||
    //   !req.body.Cource.trim() ||
    //   !req.body.Fees ||
    //   !req.body.Startdate ||
    //   !req.body.Enddate
    // ) {
    //   return res.status(400).json("Blank input error");
    // }

    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//new
// eslint-disable-next-line no-undef
exports.getuser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Student.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// eslint-disable-next-line no-undef
exports.updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    //
    var date1 = new Date(req.body.Startdate);
    var date2 = new Date(req.body.Enddate);
    var timeDiff = Math.abs(date2 - date1);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // console.log(diffDays);
    var weeks = Math.round(diffDays / 7);
    var hours = diffDays * 24;

    // console.log(`Dear ${req.body.Sname} you will require ${diffDays} days, ${weeks} weeks,${hours} hours,${miniutes} miniutes, ${seconds} seconds to complete the cource`);
    var dur = `${diffDays} days, ${weeks} weeks,${hours} hours`;
    // newStudent.Duration = dur;
    //
    const user = await Student.findByIdAndUpdate(
      { _id: id },
      {
        Sname: req.body.Sname,
        _id: req.body._id,
        Cource: req.body.Cource,
        Fees: req.body.Fees,
        Startdate: req.body.Startdate,
        Enddate: req.body.Enddate,
        Duration: dur,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// eslint-disable-next-line no-undef
exports.deleteuser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await Student.findByIdAndDelete({ _id: _id });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//new
// eslint-disable-next-line no-undef
exports.getStudent = async (req, res) => {
  try {
    const Students = await Student.find();
    res.status(200).json(Students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
