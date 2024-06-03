const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const { getTodos, addTodo, toggleTodo, deleteTodo } = require("./controllers/todoCtrl")

const app = express()
const PORT = 1000
const mongoUri = process.env.MONGODB_URI

app.use(cors())
app.use(bodyParser.json())

mongoose
	.connect(mongoUri, {})
	.then(() => {
		console.log("mongodb connected")
	})
	.catch((error) => {
		console.log("failed to connect to mongoDB", error)
	})

// route endpoint
const todoRts = require("./routes/todoRts")
const weatherRts = require("./routes/weatherRts")
const transactionRts = require("./routes/transactionRts")

app.use("/todo", todoRts)
app.use("/weather", weatherRts)
app.use("/trackmoney", transactionRts)

// Root route
app.get("/", (req, res) => {
	res.send("Welcome to this services!")
})

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})
