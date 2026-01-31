const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();
const taskRoutes = require("./routes/task.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;
