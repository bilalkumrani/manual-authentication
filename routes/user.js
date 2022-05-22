const express = require("express");
const { register, all } = require("../controllers/userControllers");
const route = express.Router();

route.post("/register", register);
route.get("/all", all);

module.exports = route;
