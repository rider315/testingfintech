const UserBond = require("../models/user-bond-model");
const AvailableBond = require("../models/available-bond-model");

// Get all bonds for a specific user (User Bonds)
const getUserBonds = async (req, res) => {
  try {
    const userId = req.user._id;
    const bonds = await UserBond.find({ user: userId }).populate("availableBond"); // Populate to get details of the original AvailableBond

    console.log("userId:", userId);
    console.log("bonds from DB:", bonds);

    res.status(200).json({ bonds });
  } catch (error) {
    console.error("Error fetching user bonds:", error);
    res.status(500).json({ message: "Error fetching user bonds" });
  }
};

// Get all available bonds (Available Bonds)
const getAvailableBonds = async (req, res) => {
  try {
    const bonds = await AvailableBond.find();
    res.status(200).json({ bonds });
  } catch (error) {
    console.error("Error fetching available bonds:", error);
    res.status(500).json({ message: "Error fetching available bonds" });
  }
};

// Add a new available bond (for admin or internal use)
const addAvailableBond = async (req, res) => {
  try {
    const newBond = await AvailableBond.create(req.body);
    res.status(201).json({ bond: newBond });
  } catch (error) {
    console.error("Error adding available bond:", error);
    res.status(500).json({ message: "Error adding available bond" });
  }
};

// Invest in an available bond
const investInBond = async (req, res) => {
  try {
    const userId = req.user._id;
    const { availableBondId, investmentAmount } = req.body; // Get these from the request

    const availableBond = await AvailableBond.findById(availableBondId);
    if (!availableBond) {
      return res.status(404).json({ message: "Available bond not found" });
    }

    if (availableBond.availableUnits < investmentAmount) {
      return res.status(400).json({ message: "Not enough units available" });
    }

    // Create a new UserBond record
    const newUserBond = new UserBond({
      user: userId,
      availableBond: availableBondId,
      purchasePrice: availableBond.faceValue * investmentAmount, // Example calculation
      issuer: availableBond.issuer,
      interestRate: availableBond.interestRate,
      maturityDate: availableBond.maturityDate,
    });

    await newUserBond.save();

    // Update the available bond units
    availableBond.availableUnits -= investmentAmount;
    await availableBond.save();

    res.status(201).json({ message: "Investment successful", bond: newUserBond });
  } catch (error) {
    console.error("Error investing in bond:", error);
    res.status(500).json({ message: "Error processing investment" });
  }
};

// Update an existing available bond (add this function if needed)
const updateAvailableBond = async (req, res) => {
    try {
      const bondId = req.params.id;
      const updatedBondData = req.body;

      const updatedBond = await AvailableBond.findByIdAndUpdate(
        bondId,
        updatedBondData,
        { new: true } // Return the updated document
      );

      if (!updatedBond) {
        return res.status(404).json({ message: "Available Bond not found" });
      }

      res.status(200).json({ bond: updatedBond });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating available bond" });
    }
};

// Delete an available bond (add this function if needed)
const deleteAvailableBond = async (req, res) => {
    try {
      const bondId = req.params.id;

      const deletedBond = await AvailableBond.findByIdAndDelete(bondId);

      if (!deletedBond) {
        return res.status(404).json({ message: "Available Bond not found" });
      }

      res.status(200).json({ message: "Available Bond deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting available bond" });
    }
};

module.exports = {
  getUserBonds,
  getAvailableBonds,
  addAvailableBond,
  investInBond,
  updateAvailableBond,
  deleteAvailableBond,
};