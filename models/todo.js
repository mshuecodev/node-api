const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	completed: { type: Boolean, default: false }
})

const Todo = mongoose.model("todos", TodoSchema)

module.exports = Todo
