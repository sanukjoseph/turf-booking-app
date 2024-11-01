const Booking = require("../models/Booking");
const Turf = require("../models/Turf");
const asyncHandler = require("express-async-handler");

const createBooking = asyncHandler(async (req, res) => {
  const { turfId, date, startTime, endTime } = req.body;

  const turf = await Turf.findById(turfId);
  if (!turf) {
    res.status(404).json({ message: "Turf not found" });
    return;
  }

  const bookingConflict = await Booking.findOne({
    turf: turfId,
    date,
    startTime: { $lt: endTime },
    endTime: { $gt: startTime },
  });

  if (bookingConflict) {
    res.status(400).json({ message: "Booking time conflict" });
  } else {
    const booking = await Booking.create({
      turf: turfId,
      user: req.user._id,
      date,
      startTime,
      endTime,
    });
    res.status(201).json(booking);
  }
});

const getBookings = asyncHandler(async (req, res) => {
  const query = req.user.role === "admin" ? {} : { user: req.user._id };
  const bookings = await Booking.find(query).populate("turf", "name location");
  res.json(bookings);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    res.status(404).json({ message: "Booking not found" });
  } else if (booking.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    res.status(403).json({ message: "Not authorized to update this booking" });
  } else {
    booking.status = req.body.status || booking.status;
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  }
});

module.exports = { createBooking, getBookings, updateBookingStatus };
