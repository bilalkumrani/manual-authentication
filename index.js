const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoute = require("./routes/homeRoute");
const mongoose = require("./config/mongoose");
const User = require("./models/userSchema");
const userRoute = require("./routes/userRoute");
const PORT = 4000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(homeRoute);
app.use(userRoute);
app.use(express.static(path.resolve(__dirname, "assets")));

app.listen(PORT, (err) => {
  if (err) {
    console.log("there is an error");
  } else {
    console.log("app is running on port: ", PORT);
  }
});
