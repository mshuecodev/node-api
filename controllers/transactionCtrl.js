const transactionModel = require("../models/transactions")

const addTransaction = async (req, res) => {
	const reqbody = req.body
	try {
		const newTransaction = new transactionModel(reqbody)
		await newTransaction.save()
		res.status(201).json(newTransaction)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getTransactions = async (req, res) => {
	try {
		const transactions = await transactionModel.find({})
		res.status(200).json(transactions)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	addTransaction,
	getTransactions
}
