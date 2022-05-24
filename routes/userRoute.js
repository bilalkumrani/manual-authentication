const express = require("express");
const {
  register,
  all,
  createSession,
  profile,
  signout,
} = require("../controllers/userControllers");
const route = express.Router();

route.post("/register", register);
route.get("/all", all);
route.post("/createsession", createSession);
route.get("/profile", profile);
route.get("/signout", signout);

module.exports = route;
