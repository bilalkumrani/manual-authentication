const express = require("express");
const { home, signup } = require("../controllers/homeController");
const userRouter = require("./user");

const route = express.Router();

route.use("/users", userRouter);

route.get("/", home);

route.get("/signup", signup);

module.exports = route;
