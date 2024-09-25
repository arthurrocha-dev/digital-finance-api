const { DataTypes } = require("sequelize");
const database = require("../config/database");

const Expenses = database.sequelize.define("Expenses",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    expense_value: {
      type: DataTypes.FLOAT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true,
    tableName: "customers",
  }
);

module.exports = Expenses;