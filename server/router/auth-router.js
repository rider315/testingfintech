const express = require("express");
const router = express.Router();

// Require authMiddleware and authController first
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Now you can use them in your routes
router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware, authController.getUserData);

module.exports = router;