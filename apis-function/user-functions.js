const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const createUser = await User.create({
      firstName,
      secondName: lastName,
      email,
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { users } = req.body;
    const mappedUsers = users.map((user) => ({
      firstName: user.firstName,
      secondName: user.lastName,
      email: user.email,
    }));
    const createUser = await User.insertMany(mappedUsers);
    return res.status(200).json({
      success: true,
      message: "Users created successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      data: users,
      message: "Users fetched successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
      message: "User fetched successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, mobileNumber, password } = req.body;

    const updatedData = {
      firstName,
      secondName: lastName,
      email,
      mobileNumber,
      password,
    };

    // Remove undefined fields
    Object.keys(updatedData).forEach(
      (key) => updatedData[key] === undefined && delete updatedData[key]
    );

    const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: e.message,
      error: e,
    });
  }
};
