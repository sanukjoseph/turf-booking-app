const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"]; 
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Import Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/turfs", require("./routes/turfRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/users", require("./routes/userRoutes")); // Include user routes

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
