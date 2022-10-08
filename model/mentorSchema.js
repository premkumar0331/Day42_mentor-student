// importing the mongoose for schema
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  mentorname: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  student: {
    type: Array,
  },
});

//creating and inserting to collection
module.exports = mongoose.model("mentor", mentorSchema);
