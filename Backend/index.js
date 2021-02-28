
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const listingRoute = require('./routes/listing')

const app = express()

const db = process.env.db

const port = 9000

mongoose.connect(db, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex: true
    },
    ()=>{
    app.listen(port, () => {
        //also trying to log info
        console.info('Application started');
    })
})
//middleware
app.use(express.json())

//routes
app.use(listingRoute)