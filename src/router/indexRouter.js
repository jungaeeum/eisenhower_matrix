const indexController = require("../controller/indexController");
const {jwtMiddleware} = require("../../jwtMiddleware");

exports.indexRouter = function (app) {
 //일정 CRUD API

 app.post("/todo", jwtMiddleware,indexController.createTodo);
 app.get("/todos", jwtMiddleware,indexController.readTodo); // user/1/todos
 app.patch("/todo", jwtMiddleware,indexController.updateTodo); //update
 app.delete(
  "/todo/:todoIdx",
  jwtMiddleware,
  indexController.deleteTodo
 ); //delete





 app.get(
  "/dummy",
  function (req, res, next) {
    console.log(1);
    next(); //다음 콜백함수를 불러준다.
  },
  function (req, res, next) {
    console.log(2);
    next();
  },
  function (req, res) {
    console.log(3);
  }
);
};

