const mongoose = require("mongoose");
const logger = require("../logger/api.logger");

const connect = () => {
  const url = process.env.MONGO_CONNECTION_STRING;

  logger.info(
    "process.env.MONGO_CONNECTION_STRING:::" +
      process.env.MONGO_CONNECTION_STRING
  );

  const resolve = () => logger.info("Connected to database");
  const reject = (err) => logger.error("Error connecting to database  ", err);

  mongoose.connection.once("open", resolve);
  mongoose.connection.on("error", reject);

  mongoose.connect(url, {});
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once("close", async () => {
    console.log("Diconnected  to database");
  });
};

module.exports = {
  connect,
  disconnect,
};
