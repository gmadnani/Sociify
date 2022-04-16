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
    email: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.INTEGER,
      defaultValue: '0'
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'https://sociify-profile-photos.s3.eu-west-2.amazonaws.com/default.png'
    },
    about: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    skills: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    experience: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    hobbies: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    facebook_link: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    linkedin_link: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    github_link: {
      type: DataTypes.STRING,
      defaultValue: ''
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
