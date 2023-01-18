const mongoose = require("mongoose");
const { logger } = require("../Log/pino");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection
  .once("open", () => {
    logger.info("connected to database");
  })
  .on("error", (err) => {
    logger.info(`mongoose error: ${err}`);
  });

module.exports = connection;
