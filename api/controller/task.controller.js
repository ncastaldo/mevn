const taskService = require("../service/task.service");
const logger = require("../logger/api.logger");

const todoController = {
  async getTasks() {
    logger.info("Controller: getTasks");
    return await taskService.getTasks();
  },

  async createTask(task) {
    logger.info("Controller: createTask", task);
    return await taskService.createTask(task);
  },
};

module.exports = todoController;
