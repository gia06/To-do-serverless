const serverless = require("serverless-http");
require("./src/ConnectionDB/connection");
const express = require("express");
const { router } = require("./src/Router/router");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerJsDoc = YAML.load("./swagger/swagger.yaml");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use(router);

app.listen(3000)

module.exports.handler = serverless(app);
