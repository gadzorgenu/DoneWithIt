const router = require('express').Router()

const { addListing,getListings} = require('../controller/listings')

//creating listing 
router.post('/listing', addListing)

//retrieving listings
router.get('/listings', getListings)

module.exports = router