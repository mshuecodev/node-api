const contactModel = require("../models/contact")

const getContacts = async (req, res) => {
	try {
		const todo = await contactModel.find({})
		res.json(todo)
	} catch (error) {
		next(error)
	}
}

const addContact = async (req, res) => {
	try {
		const newTodo = new contactModel(req.body)

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

const toggleContact = async (req, res) => {
	const { _id } = req.params
	const reqbody = req.body
	try {
		const todo = await contactModel.findById(_id)
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

const deleteContact = (req, res, next) => {
	const { _id } = req.params
	contactModel
		.findOneAndDelete({ _id })
		.then((response) => {
			res.json({ message: "Deleted!" })
		})
		.catch((error) => {
			next(error)
		})
}

module.exports = {
	getContacts,
	addContact,
	toggleContact,
	deleteContact
}
