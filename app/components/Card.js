import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors'
import AppText from './AppText';

function Card({ image, title, subTitle }) {
    return (
       <View style={styles.card}>
            <Image 
              style={styles.image} 
              source={image}
            />
            <View style={styles.detailsContainer}>
           <AppText style={styles.title} numberOfLines={1}> {title}</AppText>
           <AppText style={styles.subTitle} numberOfLines={2}> {subTitle}</AppText>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderColor: colors.white,
        marginBottom: 20,
        overflow:'hidden' 
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    subTitle: {
       color: colors.secondary,
       fontWeight: 'bold'   
    },
    title: {
        marginBottom: 7
    },
    
})
export default Card;