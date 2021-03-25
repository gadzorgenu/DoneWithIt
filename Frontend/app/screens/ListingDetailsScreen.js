import React from 'react';
import {  View, StyleSheet, Image } from 'react-native';
// import { Image } from 'react-native-expo-image-cache'

import AppText from '../components/AppText';
import ContactSellerForm from '../components/Forms/ContactSellerForm';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
    const listing = route.params
    
    return (
       <View>
           <Image 
                style={styles.image}
                source={{ uri: listing.images[0].url}}
                // preview={{ uri: listing.images[0].thumbnailUrl}}
                // tint='light'
                // uri={listing.images[0].url}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{'$' +listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/me.jpg')}
                        title='Gyna Adzorgenu'
                        subTitle='5 Listings'
                    />
                </View>
            </View>
            <ContactSellerForm />
       </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height:300
    },
    price:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer:{
        marginVertical: 30
    }
})
export default ListingDetailsScreen;