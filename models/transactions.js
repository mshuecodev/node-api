const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
	amount: {
		type: Number,
		require: true
	},
	desc: String,
	transactionType: {
		type: String,
		enum: ["income", "expense"]
	},
	date: {
		type: Date,
		default: Date.now
	}
})

const Transaction = mongoose.model("transactions", transactionSchema)

module.exports = Transaction
