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
  origin: "https://main.d2uyadv1e38nxu.amplifyapp.com",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use(router);

// * For testing purposes
app.listen(3001);

module.exports.handler = serverless(app);
