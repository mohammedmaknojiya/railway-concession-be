const mongoose = require("mongoose");

const connectToDB = async (callback) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/railwayConcession");
    console.log("DB connected successfully");
    callback();
  } catch (err) {
    console.log("Unable to make DB connection", err);
  }
};

exports.connectToDB = connectToDB;
