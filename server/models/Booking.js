const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  turf: { type: mongoose.Schema.Types.ObjectId, ref: "Turf", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: String, enum: ["confirmed", "cancelled"], default: "confirmed" }
});

module.exports = mongoose.model("Booking", BookingSchema);
