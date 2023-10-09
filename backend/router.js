const express = require('express');
const router = express.Router();
const taskController = require('./controller');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;