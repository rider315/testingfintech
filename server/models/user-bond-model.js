const mongoose = require("mongoose");

const userBondSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  availableBond: { // Reference to the original AvailableBond
    type: mongoose.Schema.Types.ObjectId,
    ref: "AvailableBond",
    required: true,
  },
  purchasePrice: { // Add purchase price
    type: Number,
    required: true,
  },
  purchaseDate: { // Add purchase date
    type: Date,
    default: Date.now,
  },
  // You might not need all fields from AvailableBond here, 
  // as they can be fetched from the AvailableBond reference
  // But keeping some for easier querying can be useful:
  issuer: {
    type: String,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  maturityDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const UserBond = mongoose.model("UserBond", userBondSchema);

module.exports = UserBond;