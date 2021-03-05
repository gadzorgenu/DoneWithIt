import React,{ useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings'
import useApi from '../hooks/useApi';
import AppText from '../components/AppText';
// import AppText from '../components/AppText';
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator';

function ListingsScreen({navigation}) {

//  passing a reference to this function
 const getListingsApi = useApi(listingsApi.getListings)
//  console.log(getListingsApi.data.listings)
    
 useEffect(() => {
    getListingsApi.request()
 }, [])



    return (
      <Screen style={styles.screen}>
          { getListingsApi.error && (<>
            <AppText>Couldn't retrieve listings</AppText>
            <AppButton title='Retry' onPress={loadListings}/>
            </>
          )
          }
          {/* <ActivityIndicator visible={getListingsApi.loading}/> */}
          <FlatList
            data={getListingsApi.data.listings}
            //the id is to be converted to a string because Flatlist expects a string as a unique identifier
            keyExtractor={(listing) => listing.id.toString()}
            // keyExtractor={(listing) => console.log(listing.id)}
            renderItem={
                ({ item }) => 
                <Card
                    title={item.title}
                    subTitle={'$'+ item.price}
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    // thumbnailUrl = {item.images[0].thumbnailUrl}
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