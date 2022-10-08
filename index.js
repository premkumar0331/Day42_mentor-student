//importing the dotenv for ease in heroku deployment
const dotenv = require("dotenv");

//configuring the dotenc to access the secret keys
dotenv.config();

//importing the express
const express = require("express");

//asssinging the values from dotenv
const PORT = process.env.PORT;

//importing the mongodb connection
const mongo = require("./connectdb");

//importing the router
const studentRouter = require("./router/studentRouter");
const mentorRouter = require("./router/mentorRouter");

//initializing the express
const app = express();

//initializing the mongodb connection
mongo.connect();

//initializing the  bodyparser
app.use(express.json());

//studnet end point API
app.use("/student", studentRouter);
app.use("/mentor", mentorRouter);
//checking the server at routes endpoints
// app.get("/", (req, res) => {
//   res.send("Welcome to the express");
// });

//listening the server on PORT
app.listen(PORT || 3000, (req, res) => {
  console.log(`server is running on port : ${PORT}`);
});
