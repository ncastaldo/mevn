const pine = require("pine");

const logger = pine();

const apiLogger = {
  info(message, ...arguments) {
    let msg = message;
    if (arguments.length > 0) {
      msg = `${message}: ${
        arguments[0] != undefined ? JSON.stringify(arguments[0]) : ""
      }`;
    }
    logger.info(msg);
  },

  error(message) {
    logger.error(message);
  },
};

module.exports = apiLogger;
