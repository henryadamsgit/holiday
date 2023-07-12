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

router.get("/:id", (req, res) => {
  res.send(req.params.id);
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

router.put("/:id", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
