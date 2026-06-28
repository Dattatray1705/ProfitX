const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    dematId: {
      type: String,
      unique: true,
    },

    mobile: {
      type: String,
      default: "",
    },

    pan: {
      type: String,
      default: "",
    },

    bank: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    plan: {
      type: String,
      default: "Basic",
    },

    isProfileComplete: {
      type: Boolean,
      default: false,
    },
      theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },

  resetOtp: {
  type: String,
  default: "",
},

otpExpiry: {
  type: Date,
  default: null,
},

  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;