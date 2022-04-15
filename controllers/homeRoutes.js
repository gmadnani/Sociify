const router = require("express").Router();
const { Profile, User } = require("../models");
const withAuth = require("../utils/auth");

// Render home view
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is already logged in, redirect to profile
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/myprofile");
    return;
  }

  res.render("login");
});

// If the user is already logged in, redirect to profile
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/editprofile");
    return;
  }

  res.render("register");
});

// Get all profiles page
router.get("/allProfiles" , async (req, res) => {
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

router.get("/myProfile", withAuth, async (req, res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Profile }],
    });

    const user = userData.get({ plain: true });
    res.render("my-profile" , {
      ...user,
      logged_in:  true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/editProfile", withAuth, async (req, res) => {
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

// Get single profile page by id
router.get("/profiles/:id", async (req, res) => {
  try {
    // Get profiles and JOIN with user data
    const profileData = await Profile.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const profile = profileData.get({ plain: true });

    // console.log("--------------------------------------------");
    console.log(profile);
    // Pass serialized data and session flag into template
    res.render("single-profile", {
      profile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
