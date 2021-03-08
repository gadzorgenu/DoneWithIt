
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const listingRoute = require('./routes/listing')
const userRoute = require('./routes/auth')

const app = express()

const db = process.env.Mongodb

const hostname = "192.168.8.126";
const port = 9000

//middleware
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())



//routes
app.use(listingRoute)
app.use(userRoute)

// "start": "json-server -p 9000 -w db.json",
mongoose.connect(db, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex: true
    },
    ()=>{
    app.listen(port,hostname, () => {
        //also trying to log info
        console.info(`Server running at http://${hostname}:${port}/`);
    })
})
