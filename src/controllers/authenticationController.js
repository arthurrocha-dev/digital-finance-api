const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Users = require('../models/usersModel');

const authenticateToken = async (req, res) => {
  const { email, password } = req.body;

  const customer = await Users.findOne({ where: { email } });
  
  if (!customer) {
    return res.status(401).json({ message: "Customer not found!" });
  }

  const passwordMatch = await bcrypt.compare(password, customer.password);
  if (!passwordMatch) {
    return response.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1y" });
  return res.json({ message: "Authentication successful!", token });
}

module.exports = {
    authenticateToken
}

