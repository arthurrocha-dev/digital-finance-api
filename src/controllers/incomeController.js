const Income = require("../models/incomeModel");
const { Op } = require("sequelize");

  
const createIncome = async (req, res) => {
    try {
      const { description, amount } = req.body;
      const userId = req.user.id;
      const income = await Income.create({
        description,
        amount,
        userId,
      });
  
      return res.status(201).json(income);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar receita financeira", details: error.message });
    }
  };

  const getAllIncomes = async (req, res) => {
    try {
      const incomes = await Income.findAll({
        where: { userId: req.user.id },
        deletedAt: null,
      });
      return res.status(200).json(incomes);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao obter receitas" });
    }
  };
  

  const deleteIncome = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.id;
  
      const income = await Income.findOne({ where: { id, userId } });
      if (!income) {
        return res.status(404).json({ message: "Income not found" });
      }
  
      await income.destroy();
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete income" });
    }
  };
  

module.exports = {
    createIncome,
    getAllIncomes,
    deleteIncome,
};
