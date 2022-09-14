const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

exports.Book = mongoose.model("Book", bookSchema);
