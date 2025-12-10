const mongoose = require("mongoose");
const User = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  secondName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("User", User);