const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    name: {
      type: String,
      required: true,
      max: 50,
    },
    address: {
      type: String,
      max: 50,
    },
    premium_status: {
      type: Boolean,
      default: false,
    },
    contact_number: {
      type: Number,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);