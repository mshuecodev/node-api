const todoModel = require("../models/todo")

const getTodos = async (req, res) => {
	try {
		const todo = await todoModel.find({})
		res.json(todo)
	} catch (error) {
		next(error)
	}
}

const addTodo = async (req, res) => {
	try {
		const newTodo = new todoModel(req.body)

		try {
			await newTodo.save()
			res.json(newTodo)
		} catch (error) {
			next(error)
		}
	} catch (error) {
		next(error)
	}
}

const toggleTodo = async (req, res) => {
	const { _id } = req.params
	try {
		const todo = await todoModel.findById(_id)
		if (!todo) {
			return res.status(404).json({ message: "Todo not found!" })
		}
		todo.completed = !todo.completed
		await todo.save()
		res.json(todo)
	} catch (error) {
		next(error)
	}
}

const deleteTodo = (req, res, next) => {
	const { _id } = req.params
	todoModel
		.findOneAndDelete({ _id })
		.then((response) => {
			res.json({ message: "Deleted!" })
		})
		.catch((error) => {
			next(error)
		})
}

module.exports = {
	getTodos,
	addTodo,
	toggleTodo,
	deleteTodo
}
