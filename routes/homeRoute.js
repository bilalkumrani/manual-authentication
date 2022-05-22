const express = require("express");
const { home, signup, login } = require("../controllers/homeController");
const userRouter = require("./userRoute");

const route = express.Router();

route.use("/users", userRouter);

route.get("/", home);

route.get("/signup", signup);

route.get("/login", login);

module.exports = route;
