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
      defaultValue: '000000'
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'https://sociify-profile-photos.s3.eu-west-2.amazonaws.com/default.png'
    },
    about: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    skills: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    experience: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    hobbies: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    facebook_link: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    linkedin_link: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    github_link: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    privacy: {
      type: DataTypes.STRING,
      defaultValue: 'private'
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
