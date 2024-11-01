const mongoose = require("mongoose");

const TurfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  amenities: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pricePerHour: { type: Number, required: true }
});

module.exports = mongoose.model("Turf", TurfSchema);
