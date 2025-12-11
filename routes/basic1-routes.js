const express = require("express");
const {
  createAdmin,
  createManyAdmins,
  getAllAdmins,
  updateEmail,
} = require("../apis-function/admin-function");
const router = express.Router();
router.post("/adminSignup", createAdmin);
router.post("/adminSignupMany", createManyAdmins);
router.get("/getAdmins", getAllAdmins);
router.put("/modifyMail", updateEmail);
module.exports = router;
