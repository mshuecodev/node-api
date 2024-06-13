const handleChatMessage = (socket, io) => {
	socket.on("chat message", (msg) => {
		console.log("Message received:", msg)
		io.emit("chat message", msg)
	})
}

const handleConnection = (socket, io) => {
	console.log("A user connected")
	handleChatMessage(socket, io)

	socket.on("disconnect", () => {
		console.log("User disconnected")
	})
}

module.exports = {
	handleConnection
}
