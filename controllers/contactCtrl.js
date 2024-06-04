const contactModel = require("../models/contact")

const getContacts = async (req, res, next) => {
	try {
		const data = await contactModel.find({})
		res.json(data)
	} catch (error) {
		next(error)
	}
}

const addContact = async (req, res, next) => {
	try {
		const newData = new contactModel(req.body)

		try {
			await newData.save()
			res.json(newData)
		} catch (error) {
			next(error)
		}
	} catch (error) {
		next(error)
	}
}

const toggleContact = async (req, res, next) => {
	const { _id } = req.params
	const reqbody = req.body
	try {
		let data = await contactModel.findByIdAndUpdate(_id, reqbody)

		res.status(200).json(data)
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
