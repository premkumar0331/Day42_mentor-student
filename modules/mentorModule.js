//importing the schema
const mentorModule = require("../model/mentorSchema");

//exporting the modules

module.exports.getmentordata = async (req, res) => {
  try {
    const getData = await mentorModule.find();
    res.send(getData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.getmentordataById = async (req, res) => {
  try {
    const getDataById = await mentorModule.findById({
      _id: req.params.mentorId,
    });
    res.send(getDataById);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.creatementordata = async (req, res) => {
  try {
    const createData = await mentorModule(req.body).save();
    res.send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.updatedata = async (req, res) => {
  try {
    const updateData = await mentorModule.findByIdAndUpdate(
      { _id: req.params.mentorId },
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
    const deleteData = await mentorModule.findByIdAndRemove({
      _id: req.params.mentorId,
    });
    res.send(deleteData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.getmentordataByname = async (req, res) => {
  try {
    const getDataById = await mentorModule
      .find()
      .select({ mentorname: "mentor1" });
    res.send(getDataById);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
