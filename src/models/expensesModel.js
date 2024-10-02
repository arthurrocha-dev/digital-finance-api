const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Expenses = database.sequelize.define(
  "Expenses",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    expense_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "expenses",
  }
);

module.exports = Expenses;
