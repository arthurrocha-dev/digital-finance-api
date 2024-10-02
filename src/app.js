const express = require("express");
database = require("./config/database.js");
const usersRoutes = require("./routes/usersRoutes.js");
const authenticationRoutes = require("./routes/authenticationRoutes.js");
const incomeRoutes = require("./routes/incomeRoutes.js");
const expensesRoutes = require("./routes/expensesRoutes.js");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./utils/swagger-output.json");
const cors = require("cors");
const app = express();
const PORT = 3000;
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/api/user", usersRoutes);
app.use("/api/auth", authenticationRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expenses", expensesRoutes);

database.initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
  });
});
