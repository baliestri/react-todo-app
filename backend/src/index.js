const http = require("http");

const app = require("./app");
require("./database");

const server = http.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
