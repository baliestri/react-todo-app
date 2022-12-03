const todoService = require("./api/todo/service");

module.exports = (router) => {
  todoService.register(router, "/todos");
};
