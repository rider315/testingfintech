const express = require("express");
const router = express.Router();
const bondController = require("../controllers/bond-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Routes for user-owned bonds
router.get("/user-bonds", authMiddleware, bondController.getUserBonds);

// Routes for available bonds (no auth required for viewing)
router.get("/available", bondController.getAvailableBonds);
router.post("/available", authMiddleware, bondController.addAvailableBond); // Example: Protect with auth
router.patch("/available/:id", authMiddleware, bondController.updateAvailableBond); // Example: Protect with auth
router.delete("/available/:id", authMiddleware, bondController.deleteAvailableBond); // Example: Protect with auth

// Route for investing in an available bond
router.post("/invest", authMiddleware, bondController.investInBond);

module.exports = router;