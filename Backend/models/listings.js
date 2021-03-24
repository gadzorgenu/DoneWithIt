const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    price: {
        type: Number,
        default: 0,
        required:[ true, 'Price is required']
    },
    description:{
        type: String,
    },
    categoryId:{
        type: Number,
        required:[ true, 'Category ID is required']
    },
    images: [
        {
            url:{
                type: String,
                required: [ true, 'Image url is required']
            }
        }
    ]
        // { url: Buffer, contentType: String }
       
    //]
    ,
    location: {
        latitude:{
            type: String,
            required:[true, 'Latitude is required']
        },
        longitude:{
            type: String,
            required: [true, 'Longitude is required']
        }
    }
    

})

const Listing = mongoose.model('listing', listingSchema)

module.exports = Listing