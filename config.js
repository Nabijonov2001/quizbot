require("dotenv").config();

module.exports = {
  token: process.env.TOKEN,
  mongo_url: process.env.MONGO_URL,
};
