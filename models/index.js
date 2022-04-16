const User = require("./User");
const Profile = require("./profile");

// User can only have one profile
User.hasOne(Profile, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// A profile can only belong to one user
Profile.belongsTo(User, {
  foreignKey: "user_id",
});

// Data models here
module.exports = { User, Profile };
