const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome Rider Infinity");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // next(error); // Consider using next for better error handling with your error middleware
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get User Data (use this in your auth router)
const getUserData = async (req, res) => {
  try {
    const userData = req.user; // Get user data from auth middleware
    // console.log("User data from auth controller:", userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user data" });
  }
};

const adminAllUsers = async (req, res) => {
  try {
    const usersData = await User.find({}, { password: 0 });
    // console.log("users data from user controller ", usersData);

    return res.status(200).json(usersData);
  } catch (error) {
    console.log(`error from the admin user controller ${error}`);
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { home, register, login, getUserData, adminAllUsers };