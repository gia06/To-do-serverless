const router = require("express").Router();
const { validate } = require("../Validation/validate");
const { validateId } = require("../Validation/validateId");
const { validateCompleted } = require("../Validation/validateCompleted");
const { body } = require("express-validator");
const {
  getToDosController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
  deleteCompletedToDosController,
  errorController
} = require("../Controller/toDoController");

router.get("/toDos", getToDosController);

router.post("/create-toDo",body("toDoItem").isString(), validate, createToDoController);

router.put("/update-toDo", validateId, updateToDoController);

router.delete("/delete-toDo", validateId, deleteToDoController);

router.delete("/delete-completed", validateCompleted, deleteCompletedToDosController);

router.use(errorController)

module.exports = { router };
