const { getCompletedToDos } = require("../Service/toDoService");
const { logger } = require("../Log/pino");

const validateCompleted = async (req, res, next) => {
  const completedToDos = await getCompletedToDos();
  logger.info(`completed-to-dos: ${completedToDos[0]}`);
  logger.trace("asd");

  if (completedToDos[0]) {
    next();
  } else {
    logger.error("No items found with completed status");
    res.status(400).json({
      errors: [
        {
          msg: "No items found with completed status",
        },
      ],
    });
  }
};

module.exports = { validateCompleted };
