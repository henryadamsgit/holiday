const express = require("express");
const router = express.Router();
const Holiday = require("../models/holiday");

// Getting all

router.get("/", async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.json(holidays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one

router.get("/:id", getCountry, (req, res) => {
  res.json(res.holiday);
});

//Creating one
router.post("/", async (req, res) => {
  const holiday = new Holiday({
    countryName: req.body.countryName,
    destination: req.body.destination,
    arrivalDate: req.body.arrivalDate,
    departureDate: req.body.departureDate,
  });
  try {
    const newHoliday = await holiday.save();
    res.status(201).json(newHoliday);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one

router.put("/:id", getCountry, async (req, res) => {
  if (req.body.countryName != null) {
    res.holiday.countryName = req.body.countryName;
  }
  if (req.body.destination != null) {
    res.holiday.destination = req.body.destination;
  }
  try {
    const updatedCountry = await res.holiday.save();
    res.json(updatedCountry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/:id", getCountry, async (req, res) => {
  try {
    await Holiday.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Deleted Holiday" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCountry(req, res, next) {
  try {
    holiday = await Holiday.findById(req.params.id);
    if (holiday == null) {
      return res.status(404).json({ message: "Cannot find that destintation" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.holiday = holiday;
  next();
}

module.exports = router;
