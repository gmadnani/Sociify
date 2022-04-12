//
const router = require("express").Router();
const { Profile } = require("../../models");

// Get all users route
router.get("/profiles", async (req, res) => {
  try {
    // Get all users and JOIN with profile data
    const profileData = await Profile.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const profiles = profileData.map((profile) => profile.get({ plain: true }));
    // Tests
    console.log(profiles);
    // Pass serialized data and session flag into template
    res.render("all-profile", {
      profiles,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
