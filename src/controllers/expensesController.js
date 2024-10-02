const Expense = require("../models/expensesModel");
const { Op } = require("sequelize");

const createExpenses = async (req, res) => {
  try {
    const { description, expense_value } = req.body;
    const userId = req.user.id;
    const expense = await Expense.create({
      description,
      expense_value,
      userId,
    });

    return res.status(201).json(expense);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar receita financeira",
      details: error.message,
    });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      where: { userId: req.user.id },
      deletedAt: null,
    });
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter despesas" });
  }
};

const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const expense = await Expense.findOne({ where: { id, userId } });
    if (!expense) {
      return res.status(404).json({ message: "Expenses not found" });
    }

    await expense.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete income" });
  }
};

module.exports = {
  createExpenses,
  getAllExpenses,
  deleteExpenses,
};
