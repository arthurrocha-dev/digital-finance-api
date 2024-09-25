const Users = require('./usersModel');
const Expenses = require('./expensesModel');
const Incomes = require('./incomeModel');

Users.hasMany(Expenses, {foreignKey: 'userId'});
Expenses.belongsTo(Users, {foreignKey: 'userId'});
Users.hasMany(Incomes, {foreignKey: 'userId'});
Incomes.belongsTo(Users, {foreignKey: 'userId'});
