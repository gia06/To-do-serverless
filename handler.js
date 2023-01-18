const serverless = require("serverless-http");
require("./src/ConnectionDB/connection");
require("dotenv").config();
const express = require("express");
const { router } = require("./src/Router/router");
const cors = require("cors");
const { logger } = require("./src/Log/pino");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerJsDoc = YAML.load("./swagger/swagger.yaml");

const app = express();

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`listening on port - ${port}`);
});

module.exports.handler = serverless(app);
