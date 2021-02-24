import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors'
import AppText from './AppText';

function Card({ imageUrl, title, subTitle, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                    <Image 
                    style={styles.image} 
                    source={imageUrl}
                    // source={{ uri: imageUrl}}
                    />
                    <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}> {title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}> {subTitle}</AppText>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderColor: colors.white,
        marginBottom: 5,
        overflow:'hidden' ,
        backgroundColor:colors.white,
        margin:15
    },
    detailsContainer: {
        padding: 10
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