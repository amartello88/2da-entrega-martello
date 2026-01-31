const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const auth = require("../middlewares/auth.middleware");

// Todas las rutas protegidas con auth
router.get("/", auth, taskController.getTasks);
router.post("/", auth, taskController.createTask);
router.patch("/:id", auth, taskController.updateTask);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
