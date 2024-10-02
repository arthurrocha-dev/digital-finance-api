const express = require("express");
const ExpensesController = require("../controllers/expensesController");
const authenticateToken = require("../middlewares/authtentication");

const router = express.Router();

router.post("/", authenticateToken, ExpensesController.createExpenses);
router.get("/", authenticateToken, ExpensesController.getAllExpenses);
router.delete("/:id", authenticateToken, ExpensesController.deleteExpenses);

module.exports = router;
