const express = require("express");
const {
  register,
  all,
  createSession,
} = require("../controllers/userControllers");
const route = express.Router();

route.post("/register", register);
route.get("/all", all);
route.post("/createSession", createSession);

module.exports = route;
