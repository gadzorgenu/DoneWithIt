const Listing = require('../models/listings')

const ListingController = {}

ListingController.addListing = async ( req, res) => {
    try {
        console.log(req.body)
        let listing = new Listing(req.body)
        let result = await listing.save()
        console.log('res',result)
        res.status(201).send({ message: 'Listing created', result})
    } catch (error) {
        console.log(error)
    }
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