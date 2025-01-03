const mongoose = require("mongoose");

const availableBondSchema = new mongoose.Schema({
  issuer: {
    type: String,
    required: true,
  },
  faceValue: {
    type: Number,
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
  tenure: {
    type: String, // You can calculate this based on maturityDate
  },
  minInvestment: {
    type: Number,
  },
  availableUnits: {
    type: Number,
    required: true,
    min: 0,
  },
  riskLevel: {
    type: String,
  },
}, { timestamps: true });

const AvailableBond = mongoose.model("AvailableBond", availableBondSchema);

module.exports = AvailableBond;