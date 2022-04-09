// Get all users route
router.get("/", async (req, res) => {
  try {
    // Get all users and JOIN with profile data
    const userData = await Users.findAll({
      include: [
        //   {
        //     model: User,
        //     attributes: ["name"],
        //   },
        //   {
        //     model: Profile,
        //     attributes: ["id", "content", "post_id", "user_id", "date_created"],
        //     include: {
        //       model: User,
        //       attributes: ["name"],
        //     },
        //   },
      ],
    });

    // Serialize data so the template can read it
    const users = postData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render("all-profile", {
      users,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
