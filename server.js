const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");
const logger = require("./middleware/logger");

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3005",
    optionsSuccessStatus: ,
  }),
);
app.use(express.json());
app.use(logger);

app.use("/users", require("./routes/users"));
app.use("/books", require("./routes/books"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Внутренняя ошибка сервера",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Сервер запущен на http://127.0.0.1:${PORT}`);
});
