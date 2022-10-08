//creating a database connection
//importing the mongoose
const mongoose = require("mongoose");

//exporting the connection to database
module.exports = {
  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("connected to the mongodb Atlas");
    } catch (err) {
      console.log(err);
    }
  },
};
