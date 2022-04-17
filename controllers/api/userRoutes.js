const router = require("express").Router();
const { User } = require("../../models");

//get all users
router.get("/", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

//get users by id
router.get("/:id", async (req, res) => {
  const userData = await User.findOne({ where: { id: req.params.id } }).catch(
    (err) => {
      res.json(err);
    }
  );
  res.json(userData);
});

//registering a new user
router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//logging in a user
router.post("/login", async (req, res) => {
  try {
    console.log(req.body, "fromLogin");
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logging out a user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
