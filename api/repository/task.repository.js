const { connect, disconnect } = require("../config/db.config");
const { Task } = require("../model/task.model");
const logger = require("../logger/api.logger");

connect();

const taskRepository = {
  async getTasks() {
    const tasks = await Task.find({});
    logger.info("tasks:::", tasks);
    return tasks;
  },

  async createTask(task) {
    let data = {};
    try {
      data = await Task.create(task);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  },
};

module.exports = taskRepository;
