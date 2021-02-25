import React,{ useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
// import listingsApi from '../api/listings'
// import AppText from '../components/AppText';
// import AppButton from '../components/AppButton'

const listings =[
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    },
    {
        id: 3,
        title: 'Room & board couch (great condition)',
        price: 1500,
        image: require('../assets/room_couch.jpg')
    },
    {
        id: 4,
        title: 'Designer wear shoes', 
        price: 100,
        image: require('../assets/shoe.jpg')
    },
    {
        id: 5,
        title: 'Canon 400D (Great condition)', 
        price: 300,
        image: require('../assets/camera.jpg')
    },
    {
        id: 6,
        title: 'Nikon D850 for sale ', 
        price: 350,
        image: require('../assets/nikon_camera.jpg')
    },
    {
        id: 7,
        title: 'Comfortable bed', 
        price: 2000,
        image: require('../assets/bed.jpg')
    },
    {
        id: 8,
        title: 'Black spin exercise bike', 
        price: 800,
        image: require('../assets/gym.jpg')
    },
    
]


function ListingsScreen({navigation}) {
    //api integration
//     const [listing, setListing] = useState([])
//     const [error, setError] = useState(false)
    
//     useEffect(() => {
//         loadListings()
//     }, [])

//   const loadListings =  async() => {
//         const response = await listingsApi.getListings()
//         console.log(response)
//         if(!response.ok) return setError(true)

//         setError(false)
//         setListing(response.data)
//     }
   
        
    return (
      <Screen style={styles.screen}>
          {/* { error && (
              <>
                <AppText>Couldn't retrieve the listings</AppText>
                <Button title='Retry' onPress={loadListings}/>
              </>
          )} */}
          <FlatList
            data={listings}
            // data={listing}
            //the id is to be converted to a string because Flatlist expects a string as a unique identifier
            keyExtractor={listing=> listing.id.toString()}
            renderItem={
                ({ item }) => 
                <Card
                    title={item.title}
                    subTitle={'$'+ item.price}
                    imageUrl={item.image}
                    // image={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                />
            }
          />
      </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light,
        marginBottom: 10
    }
})
export default ListingsScreen;