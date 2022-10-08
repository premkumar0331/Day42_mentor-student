//importing the schema
const studentModule = require("../model/studentSchema");

//exporting the modules

module.exports.getstudentdata = async (req, res) => {
  try {
    const getData = await studentModule.find();
    res.send(getData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.getstudentdataById = async (req, res) => {
  try {
    const getDataById = await studentModule.findById({
      _id: req.params.studentId,
    });
    res.send(getDataById);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.createstudentdata = async (req, res) => {
  try {
    const createData = await studentModule(req.body).save();
    res.send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.updatedata = async (req, res) => {
  try {
    const updateData = await studentModule.findByIdAndUpdate(
      { _id: req.params.studentId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.send(updateData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.deletedata = async (req, res) => {
  try {
    const deleteData = await studentModule.findByIdAndRemove({
      _id: req.params.studentId,
    });
    res.send(deleteData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
