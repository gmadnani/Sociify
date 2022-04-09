const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Render home view
router.get("/", async (req, res) => {
  res.render("home");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
