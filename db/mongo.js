const mongoose = require("mongoose");
const { mongo_url } = require("../config");

function DBConnection() {
  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB: mongo db connection is established");
    })
    .catch((err) => {
      console.log("DB: MongoDB Connection error:", err);
    });
}

module.exports = DBConnection;
