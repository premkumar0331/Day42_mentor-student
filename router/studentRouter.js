//importing the express to access router
const express = require("express");

//importing the module
const studentRouter = require("../modules/studentModule");

const router = express.Router();

router.get("/getdata", studentRouter.getstudentdata);

router.get("/getdata/:studentId", studentRouter.getstudentdataById);

//Write API to create Student
router.post("/createdata", studentRouter.createstudentdata);

//Write API to Assign or Change Mentor for particular Student
//Select One Student and Assign one Mentor
router.put("/update/:studentId", studentRouter.updatedata);

router.delete("/delete/:studentId", studentRouter.deletedata);

//exporting the data;
module.exports = router;
