const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		phone: String,
		address: String
	},
	{
		timestamps: true
	}
)

const Contact = mongoose.model("contacts", contactSchema)

module.exports = Contact
