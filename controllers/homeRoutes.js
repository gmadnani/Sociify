const router = require("express").Router();
const { Profile, User } = require("../models");
const withAuth = require("../utils/auth");

// Render home view
router.get("/", async (req, res) => {
  res.render("home");
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Profile }],
    });

    const user = userData.get({ plain: true });

    console.log("logged in successfully");

    // Open edit profile page after login
    res.render("edit-profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is already logged in, redirect to profile
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// If the user is already logged in, redirect to profile
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("register");
});

// Get all profiles page
router.get("/all", withAuth , async (req, res) => {
  try {
    // Get all profiles and JOIN with user data
    const profileData = await Profile.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const profiles = profileData.map((profile) => profile.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render("all-profile", {
      profiles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/myprofile",withAuth, async (req, res) => {
  res.render("my-profile");
});
router.get("/singleprofile", withAuth, async(req, res) => {
  res.render("single-profile");
});



module.exports = router;

