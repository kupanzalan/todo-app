const mongoose = require('mongoose');
const path = require('path');

const envPath = path.join(__dirname, '../.env');
require('dotenv').config({ path: envPath });

const dbUri = process.env.DB_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(dbUri, connectionParams)
  .then(() => {
    console.info('connected to db');
  })
  .catch((e) => {
    console.log(`error: ${e}`);
  });

const taskSchema = new mongoose.Schema({
  taskName: String,
  taskColor: String,
});

const Task = mongoose.model('Task', taskSchema);

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { taskName, taskColor } = req.body;
    const newTask = new Task({ taskName, taskColor });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const { taskName, taskColor } = req.body;
    
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { taskName, taskColor },
      { new: true }
    );
    
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    
    const deletedTask = await Task.findByIdAndDelete(taskId);
    
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};