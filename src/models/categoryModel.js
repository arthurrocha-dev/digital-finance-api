const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Expenses = database.sequelize.define(
  "Category",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "categories",
  }
);

module.exports = Category;
