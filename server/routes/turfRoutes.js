const express = require("express");
const {
  createTurf,
  getAllTurfs,
  updateTurf,
  deleteTurf,
} = require("../controllers/turfController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/")
  .get(getAllTurfs)                        // Public: View all turfs
  .post(protect, authorize(["owner"]), createTurf); // Owner: Create turf

router.route("/:id")
  .put(protect, authorize(["owner"]), updateTurf)  // Owner: Update turf
  .delete(protect, authorize(["owner"]), deleteTurf); // Owner: Delete turf

module.exports = router;
