const taskRepository = require("../repository/task.repository");

const taskService = {
  async getTasks() {
    return await taskRepository.getTasks();
  },

  async createTask(task) {
    return await taskRepository.createTask(task);
  },
};

module.exports = taskService;
