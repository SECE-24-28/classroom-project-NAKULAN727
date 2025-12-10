// const mongoose = require("mongoose");
// exports.connect = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/React_DB");
//     console.log("Database Connected Successfully");
//   } catch (error) {
//     console.log("Error in connecting to DB");
//     console.error(error);
//   }
// };
const mongoose = require("mongoose");
exports.connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/React_DB");
    console.log("Db is connected");
  } catch (e) {
    console.log("Error in connecting to the db");
  }
};

//get

//post

//put

//delete
