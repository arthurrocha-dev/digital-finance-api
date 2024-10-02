const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Category = database.sequelize.define(
  "Category",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    tableName: "categories",
  }
);

module.exports = Category;
