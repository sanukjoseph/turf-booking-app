const Turf = require("../models/Turf");
const asyncHandler = require("express-async-handler");

const createTurf = asyncHandler(async (req, res) => {
  const { name, location, amenities, pricePerHour } = req.body;
  const turf = await Turf.create({
    name,
    location,
    amenities,
    pricePerHour,
    owner: req.user._id,
  });
  res.status(201).json(turf);
});

const getAllTurfs = asyncHandler(async (req, res) => {
  const turfs = await Turf.find({});
  res.json(turfs);
});

const updateTurf = asyncHandler(async (req, res) => {
  const { name, location, amenities, pricePerHour } = req.body;
  const turf = await Turf.findById(req.params.id);

  if (!turf) {
    res.status(404).json({ message: "Turf not found" });
  } else if (turf.owner.toString() !== req.user._id.toString()) {
    res.status(403).json({ message: "Not authorized to update this turf" });
  } else {
    turf.name = name || turf.name;
    turf.location = location || turf.location;
    turf.amenities = amenities || turf.amenities;
    turf.pricePerHour = pricePerHour || turf.pricePerHour;
    const updatedTurf = await turf.save();
    res.json(updatedTurf);
  }
});

const deleteTurf = asyncHandler(async (req, res) => {
  const turf = await Turf.findById(req.params.id);

  if (!turf) {
    res.status(404).json({ message: "Turf not found" });
  } else if (turf.owner.toString() !== req.user._id.toString()) {
    res.status(403).json({ message: "Not authorized to delete this turf" });
  } else {
    await turf.remove();
    res.json({ message: "Turf removed successfully" });
  }
});

module.exports = { createTurf, getAllTurfs, updateTurf, deleteTurf };
