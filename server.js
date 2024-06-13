const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const { createServer } = require("http")
const { Server } = require("socket.io")

// route endpoint
const chatRoutes = require("./routes/chatRts")

const app = express()
const PORT = 1000
const mongoUri = process.env.MONGODB_URI

app.use(cors())
// Set up CORS middleware
// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
// 	res.setHeader("Access-Control-Allow-Methods", "GET, POST")
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
// 	res.setHeader("Access-Control-Allow-Credentials", "true")
// 	next()
// })
app.use(bodyParser.json())

const todoRts = require("./routes/todoRts")
const weatherRts = require("./routes/weatherRts")
const transactionRts = require("./routes/transactionRts")
const contactRts = require("./routes/contactRts")

app.use("/todo", todoRts)
app.use("/weather", weatherRts)
app.use("/trackmoney", transactionRts)
app.use("/contact", contactRts)

mongoose
	.connect(mongoUri, {})
	.then(() => {
		console.log("mongodb connected")
	})
	.catch((error) => {
		console.log("failed to connect to mongoDB", error)
	})

// Create HTTP server
const server = createServer(app)

// Initialize Socket.IO server
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		// allowedHeaders: ["Content-Type"],
		credentials: true
	}
})

// Handle socket connections
io.on("connection", (socket) => {
	console.log("A user connected")

	socket.on("disconnect", () => {
		console.log("User disconnected")
	})
})

chatRoutes(io)

// Root route
app.get("/", (req, res) => {
	res.send("Welcome to this services!")
})

server.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})
