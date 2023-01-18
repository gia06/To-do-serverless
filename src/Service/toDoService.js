const { toDoModel } = require("../Schema/toDoSchema");

const getToDos = async () => {
  return (toDos = await toDoModel.find());
};

const getTodoById = async ({ id }) => {
  return await toDoModel.findOne({ _id: id });
};

const getCompletedToDos = async () => {
  return await toDoModel.find({ itemStatus: "completed" });
};

const createTodo = async ({ toDoItem }) => {
  toDoModel.create({
    toDoItem: toDoItem,
    itemStatus: "active",
    isDeleted: false,
  });
};

const updateToDo = async ({ id }) => {
  const item = await toDoModel.findOne({ _id: id });
  if (item.itemStatus === "active") {
    await item.updateOne({ itemStatus: "completed" });
  } else {
    await item.updateOne({ itemStatus: "active" });
  }
};

const deleteTodo = async ({ id }) => {
  const item = await toDoModel.findOne({ _id: id });

  const deleted = await item.delete({ _id: id });
};

const deleteCompletedToDos = async () => {
  await toDoModel.deleteMany({ itemStatus: "completed" });
};

module.exports = {
  getToDos,
  getTodoById,
  getCompletedToDos,
  createTodo,
  updateToDo,
  deleteTodo,
  deleteCompletedToDos,
};
