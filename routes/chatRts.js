// routes/chatRoutes.js
const { handleConnection } = require("../controllers/chatCtrl")

const chatRoutes = (io) => {
	io.on("connection", (socket) => {
		handleConnection(socket, io)
	})
}

module.exports = chatRoutes
