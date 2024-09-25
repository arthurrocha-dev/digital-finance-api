const express = require("express");
database = require("./config/database.js")
const usersRoutes = require("./routes/usersRoutes.js")
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", usersRoutes);

database.initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
  });
});