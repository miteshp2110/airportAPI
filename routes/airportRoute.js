const express=require('express')
const app=express()
const routes=express.Router()
const {fetchAirport}=require('../controllers/airports')
const { fetchFlightData } = require('../controllers/flightData')
const { fetchDistance } = require('../controllers/distance')

routes.route('/airport').get(fetchAirport)
routes.route('/flightData').post(fetchFlightData)


module.exports=routes
