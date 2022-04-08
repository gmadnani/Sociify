const router = require("express").Router();
const withAuth = require("../utils/auth");

// see all uswer profile after logged in on home page
router.get("/",withAuth, (req, res) => {
    res.render("all-profile");
  });

// see one user profile
  router.get("/:id",withAuth, (req, res) => {
    res.render("single-profile");
  });

//   see my profile and edit
  router.get("/user/:id",withAuth, (req, res) => {
    res.render("edit-profile");
  });
