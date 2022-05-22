const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test-app");

const db = mongoose.connection;

db.on("error", () => {
  console.log("error in conneting to database");
});

db.once("open", () => {
  console.log("successfully connected to database");
});

module.exports = mongoose;
