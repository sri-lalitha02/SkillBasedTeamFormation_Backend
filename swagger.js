const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Skill Based Team Formation Platform API",
      version: "1.0.0",
      description:
        "API documentation for Skill Based Team Formation Platform",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local Server",
      },
      {
        url: "https://skillbasedteamformation-backend-1.onrender.com",
        description: "Production Server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [__dirname + "/routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};