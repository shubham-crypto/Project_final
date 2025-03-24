const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/User");
const multer = require("multer");

const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage });

// ✅ Route: Upload User Profile Image
router.put("/upload_image", authMiddleware, upload.single("userImage"), async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    user.userImage = `/uploads/${req.file.filename}`; // Save image URL in database
    await user.save();

    res.json({ message: "Profile image updated successfully", imageUrl: user.userImage });
  } catch (err) {
    console.error("Error uploading profile image:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
