require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
connectDB();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const mlRoutes = require('./routes/mlRoutes'); 
// /const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
console.log("MONGO_URI:", process.env.MONGO_URI);


// Use Routes
app.use("/api/auth", authRoutes);  // Handles login & signup
app.use('/api/ml', mlRoutes);
//app.use("/api/users", userRoutes); // Handles user profile & other actions

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
