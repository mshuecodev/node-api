const express = require("express")
const { getTodos, addTodo, toggleTodo, deleteTodo } = require("../controllers/todoCtrl")

const router = express.Router()

router.get("/", getTodos)
router.post("/", addTodo)
router.put("/:id", toggleTodo)
router.delete("/:id", deleteTodo)

module.exports = router
