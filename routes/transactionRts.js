const express = require("express")
const { addTransaction, getTransactions } = require("../controllers/transactionCtrl")

const router = express.Router()

router.get("/", getTransactions)
router.post("/", addTransaction)

module.exports = router
