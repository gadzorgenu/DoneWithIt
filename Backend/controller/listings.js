const Listing = require('../models/listings')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


const imageDir = path.resolve(__dirname,"..","public/assets");

const storage = multer.diskStorage({
    destination: imageDir,
    filename: function (req, file,cb) {
        cb( null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
}).single('images')

const ListingController = {}


ListingController.addListing =  (req,res) => {
    upload( req, res, async(err) =>{
        // console.log('request', JSON.parse(JSON.stringify(req.body)))
            try {
                let listing = new Listing(req.body)
                listing.images.url = req.file.filename
                let result = await listing.save()
                res.status(201).send({ message: 'Listing created', result})
            } catch (error) {
                console.log(error)
            }
            
    })
}
ListingController.getListings = async( req,res) => {
    try {
        let listings = await Listing.find({})
        listings ? res.status(200).send({ message: 'Listings available', listings}) :
        res.status(400).send({ message: 'Listings unavailable'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = ListingController