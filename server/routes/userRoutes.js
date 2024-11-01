const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/profile")
  .get(protect, getUserProfile)          
  .put(protect, updateUserProfile);

router.route("/")
  .get(protect, authorize(["admin"]), getAllUsers);

router.route("/:id")
  .delete(protect, authorize(["admin"]), deleteUser);

module.exports = router;
