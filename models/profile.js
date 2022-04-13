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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
        type: DataTypes.NUMBER,
        allowNull: true,
    },
    city: {
         type: DataTypes.STRING,
         allowNull: true,
    }, 
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING, 
        allowNull: true,
    },
    skills: {
        type: DataTypes.ARRAY,
        allowNull: true,
    },
    aboutme: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    experience: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    facebook_link: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    linkedin_link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    github_link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    privacy: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
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