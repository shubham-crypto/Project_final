const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String },
    education: { type: String },
    referral: { type: String },
    userImage: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
