const express = require("express");
const cors = require("cors");

const routes = require("./routes");

module.exports = ((app = express()) => {
  const router = express.Router();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Accept", "Origin", "X-Requested-With"],
    })
  );
  app.use("/api", router);

  routes(router);

  return app;
})();
