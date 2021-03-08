import client from './client'

// const { add } = require("react-native-reanimated")

// const endpoint = '/listings'

const getListings = () => client.get('/listings')

const addListing = (listing) => {
    const data = new FormData()
    data.append('title',listing.title)
    data.append('price',listing.price)
    data.append('categoryId',listing.category.value)
    data.append('description',listing.description)
    data.append('images[0].url', listing.images[0].url)
    // listing.images.forEach((image,index) => 
    //     data.append('images.url', {
    //         name: 'image' + index, 
    //         type: 'image/jpg',
    //         uri: listing.image
    //     }))

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
        // console.log('location',listing.location)
    if(listing.location)
    data.append('location.latitude', JSON.stringify(listing.location.latitude))
    data.append('location.longitude', JSON.stringify(listing.location.longitude))

    console.log('data',data)
   return client.post('/listings', data, config)
}

export default {
    getListings,
    addListing
}