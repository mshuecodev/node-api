const axios = require("axios")

const apiKey = process.env.WEATHER_API_KEY
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"

const getWeahters = async (req, res, next) => {
	const { lat, long } = req.query
	try {
		// if (!city) {
		// 	res.status(400).json({ error: "city is required!" })
		// }
		const response = await axios.get(`${apiUrl}`, {
			params: {
				lat,
				long,
				// q: city,
				appid: apiKey,
				units: "metric"
			}
		})
		console.log(response.data)

		res.json(response.data)
	} catch (error) {
		next(error)
	}
}

const getWeatherByCity = async (req, res, next) => {
	const { city } = req.query
	try {
		if (!city) {
			res.status(400).json({ error: "city is required!" })
		}
		const response = await axios.get(`${apiUrl}`, {
			params: {
				q: city,
				appid: apiKey,
				units: "metric"
			}
		})
		console.log(response.data)

		res.json(response.data)
	} catch (error) {
		next(error)
	}
}

module.exports = {
	getWeahters,
	getWeatherByCity
}
