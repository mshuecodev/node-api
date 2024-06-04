const express = require("express")
const { getContacts, addContact, toggleContact, deleteContact } = require("../controllers/contactCtrl")

const router = express.Router()

router.get("/", getContacts)
router.post("/", addContact)
router.put("/:_id", toggleContact)
router.delete("/:_id", deleteContact)

module.exports = router
