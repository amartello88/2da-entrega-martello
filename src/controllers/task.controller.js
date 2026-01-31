const Task = require("../models/Task");

// Lista tareas del usuariio
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear tarea
exports.createTask = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const task = new Task({ title, completed, user: req.userId });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualiza tarea
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Elimina tarea
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json({ message: "Tarea eliminada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
