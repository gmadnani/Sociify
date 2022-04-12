const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Render home view
router.get("/", async (req, res) => {
  res.render("home");
});

// Show the logged in users profile
// Use withAuth middleware to prevent access
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Profile }],
    });

    const user = userData.get({ plain: true });

    console.log("logged in successfully");

    res.render("single-profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is logged in then direct them to the their profile
// Else take them to the login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

// If the user is logged in then direct them to the their profile
// Else take them to the register page
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("register");
});

module.exports = router;
