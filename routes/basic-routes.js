const express = require("express");
const {
  createUser,
  createManyUsers,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/userSignupMany", createManyUsers);

router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
