const Mongoose = require("mongoose");

Mongoose.set("strictQuery", true);

const { Schema } = Mongoose;

const toDoSchema = new Schema({
  toDoItem: String,
  itemStatus: String, // * active or completed
});

const toDoModel = Mongoose.model("toDoItem", toDoSchema);

module.exports = { toDoModel };
