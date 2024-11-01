const express = require("express");
const {
  createBooking,
  getBookings,
  updateBookingStatus,
} = require("../controllers/bookingController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, authorize(["customer"]), createBooking)  // Customer: Create booking
  .get(protect, authorize(["admin", "customer"]), getBookings); // Admin/Customer: Get bookings

router.route("/:id")
  .put(protect, authorize(["admin", "customer"]), updateBookingStatus); // Admin/Customer: Update status

module.exports = router;
