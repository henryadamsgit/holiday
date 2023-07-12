const mongoose = require("mongoose");
const holidaySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  departureDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Holiday", holidaySchema);
