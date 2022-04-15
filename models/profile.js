const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.STRING,
    },
    hobbies: {
      type: DataTypes.STRING,
    },
    facebook_link: {
      type: DataTypes.STRING,
    },
    linkedin_link: {
      type: DataTypes.STRING,
    },
    github_link: {
      type: DataTypes.STRING,
    },
    privacy: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "profile",
  }
);

module.exports = Profile;
