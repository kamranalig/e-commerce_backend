const mongoose = require("mongoose");

const mondUrl = "mongodb://127.0.0.1:27017/ecommerceW";

const connectDb = async () => {
  // Changed to an async function
  try {
    await mongoose.connect(mondUrl);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = { connectDb };
