const express=require('express')
const cors=require('cors')
const env=require('dotenv')
const { dbConnectivity } = require('./controllers/Database/dbConnection')
const { default: mongoose } = require('mongoose')
//const { dbConnect } = require('./controllers/Database/dbConnection')
const app=express()
app.use(cors())
env.config()

dbConnectivity()

app.use(express.json())

app.use('/',require('./routes/airportRoute'))


app.listen(process.env.PORT,()=>{
    console.log("App started")
})