//importing the express to access router
const express = require("express");

//importing the module
const mentorRouter = require("../modules/mentorModule");

const router = express.Router();

router.get("/getdata", mentorRouter.getmentordata);

// /Write API to show all students for a particular mentor
router.get("/getdata/:mentorId", mentorRouter.getmentordataById);

// router.get("/getdata?", mentorRouter.getmentordataByname);

//Write API to create Mentor
router.post("/createdata", mentorRouter.creatementordata);

//Write API to Assign a student to Mentor
//Select one mentor and Add multiple Student
//A student who has a mentor should not be shown in List
router.put("/update/:mentorId", mentorRouter.updatedata);

router.delete("/delete/:mentorId", mentorRouter.deletedata);

//exporting the data;
module.exports = router;
