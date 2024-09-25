const Users = require("../models/usersModel");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const createUser = async (req, res) => {
  try {
    const { nome_completo, email, password } = req.body;
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email já cadastrado!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      nome_completo,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const userResponse = {
      nome_completo: user.nome_completo,
      email: user.email
    }

    return res.status(200).json(userResponse);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter usuário" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome_completo, email, password } = req.body;

    const user = await Users.findByPk(id);
    const existingEmailUser = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (existingEmailUser) {
      return res.status(400).json({ message: "Email já cadastrado!" });
    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : user.password;

    await user.update({
      nome_completo: nome_completo || user.nome_completo,
      email: email || user.email,
      password: hashedPassword,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
