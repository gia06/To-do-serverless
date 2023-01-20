const mongoose = require("mongoose");
const { logger } = require("../Log/pino");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });

const connection = mongoose.connection
  .once("open", () => {
    logger.info("connected to database");
  })
  .on("error", (err) => {
    logger.info(`mongoose error: ${err}`);
  });

module.exports = connection;
