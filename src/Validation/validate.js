const { validationResult } = require("express-validator");
const { logger } = require("../Log/pino");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  logger.error(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validate };
