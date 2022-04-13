const sequelize = require("../config/connection");
const User = require("../models/User");
const Profile = require("../models/Profile");
const userData = require("./userData.json");
const profileData = require("./profileData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed user data
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed profile data
  await Profile.bulkCreate(profileData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
