const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");
const classRoutes = require("./routes/classRoutes");

dotenv.config();
// Middleware
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/classes", classRoutes);




// Route imports
const authRoutes = require("./routes/auth");
const otpRoutes = require("./routes/otpRoutes"); // ✅ ADD THIS LINE

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/otp", otpRoutes); // ✅ MOUNT OTP ROUTES

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
app.get('/',(req,res)=>{res.send("hello world")})
// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });