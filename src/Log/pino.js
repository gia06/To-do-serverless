const pino = require("pino");
require("dotenv").config();

const pretty = process.env.PRETTY_LOGGING
  ? {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
          ignore: "pid,hostname",
        },
      },
    }
  : {};

const logger = pino(pretty);

module.exports = { logger };
