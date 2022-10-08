// importing the mongoose for schema
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  mentorname: {
    type: Array,
    required: true,
  },
});


//creating and inserting to collection
module.exports = mongoose.model("Student",studentSchema);
