const Users = require("./usersModel");
const Expenses = require("./expensesModel");
const Incomes = require("./incomeModel");
const Category = require("./categoryModel");

Users.hasMany(Expenses, { foreignKey: "userId" });
Expenses.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(Incomes, { foreignKey: "userId" });
Incomes.belongsTo(Users, { foreignKey: "userId" });
Category.hasMany(Expenses, { foreignKey: "categoryId" });
Expenses.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Incomes, { foreignKey: "categoryId" });
Incomes.belongsTo(Category, { foreignKey: "categoryId" });
