const express = require("express")
const { getWeahters, getWeatherByCity } = require("../controllers/weatherCtrl")

const router = express.Router()

router.get("/", getWeahters)
router.get("/city", getWeatherByCity)

module.exports = router
