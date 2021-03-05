import client from './client'

const { add } = require("react-native-reanimated")


const getListings = () => client.get('/listings')

const addListing = (listing, onUploadProgress) => {
    const data = new FormData()
    data.append('title',listing.title)
    data.append('price',listing.price)
    data.append('categoryId',listing.category.value)
    data.append('description',listing.description)

    listing.images.forEach( image => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        }))

    if(listing.location)
    data.append('location', JSON.stringify(listing.location))

   return client.post('/listing', data,{
    onUploadProgress: progress => 
        onUploadProgress(progress.loaded / progress.total)
})
}

export default {
    getListings,
    addListing
}