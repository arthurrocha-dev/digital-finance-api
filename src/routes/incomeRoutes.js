const express = require("express");
const IncomeController = require("../controllers/incomeController");
const authenticateToken = require("../middlewares/authtentication");

const router = express.Router();

router.post("/", authenticateToken, IncomeController.createIncome);
router.get("/", authenticateToken, IncomeController.getAllIncomes);
router.delete("/:id", authenticateToken, IncomeController.deleteIncome);

module.exports = router;
