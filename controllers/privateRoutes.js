const router = require("express").Router();
const withAuth = require("../utils/auth");
const {User} = require("../models")

// see all uswer profile after logged in on home page
router.get("/",withAuth,async(req, res) => {
    try{
      const userData =await User.findByPk(req.session.user_id)
    }
  });

// see one user profile
  router.get("/:id",withAuth, (req, res) => {
    res.render("single-profile");
  });

//   see my profile and edit
  router.get("/user/:id",withAuth, (req, res) => {
    res.render("edit-profile");
  });
