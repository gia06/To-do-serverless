const mongoose = require("mongoose");
const { getTodoById } = require("../Service/toDoService");
const { logger } = require("../Log/pino");

const validateId = async (req, res, next) => {
  const item = await getTodoById(req.body);
  logger.info(item);

  if (item) {
    next();
  } else {
    logger.error("Invalid id");
    res.status(400).json({
      errors: [
        {
          value: req.body.id,
          msg: "Invalid value",
          param: "id",
          location: "body",
        },
      ],
    });
  }
};

module.exports = { validateId };
