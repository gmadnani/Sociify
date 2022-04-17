const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");

//api routes for users and profiles
router.use("/users", userRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
