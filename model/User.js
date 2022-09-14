const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    user_name: {
      type: String,
    },
    step: {
      type: String,
      default: "1",
    },
  },
  {
    timestamps: true,
  }
);

exports.User = mongoose.model("User", userSchema);
