const Listing = require('../models/listings')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: '../public/assets',
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
        console.log('req', JSON.parse(JSON.stringify(req.body)))
        console.log('File', req.file)
            try {
                let listing = new Listing(req.body)
                let result = await listing.save()
                console.log('res',result)
                res.status(201).send({ message: 'Listing created', result})
            } catch (error) {
                console.log(error)
            }
            
    })
}
// ListingController.addListing = async ( req, res) => {
//     console.log('getting data')
//     console.log(JSON.parse(JSON.stringify(req.body)))
//     // upload( req, res, (err) => {

//     // })
//     // console.log(req)
//     try {
//         console.log(JSON.parse(JSON.stringify(req.body)))
//         let listing = new Listing(req.body)
//         let result = await listing.save()
//         console.log('res',result)
//         res.status(201).send({ message: 'Listing created', result})
//     } catch (error) {
//         console.log('logging error')
//         console.log(error)
//     }
// }

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