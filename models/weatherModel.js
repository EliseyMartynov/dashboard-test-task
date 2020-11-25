const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Weather = db.define(
  "Weather",
  {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tenDaysWeather: {
      type: DataTypes.JSON
    }
  },
  {
    tableName: "weather"
  }
);

module.exports = Weather;
