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
           <AppText style={styles.title}> {title}</AppText>
           <AppText> {subTitle}</AppText>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderColor: colors.white,
        marginBottom: 20
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        marginBottom: 7
    }
})
export default Card;