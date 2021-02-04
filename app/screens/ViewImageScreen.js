import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.close}></View>
            <View style={styles.delete}></View>
            <Image 
            resizeMode='contain'
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    close:{
        width: 50,
        height: 50,
        backgroundColor:colors.primary,
        position: 'absolute', // to position the component relative to its parent 
        top: 40,
        left:30

    },
    container:{
        backgroundColor:colors.black,
        flex:1 //this makes the view take or cover the entire screen
    },
    delete:{
        width: 50,
        height: 50,
        backgroundColor:colors.secondary,
        position: 'absolute', // to position the component relative to its parent 
        top: 40,
        right:30
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
export default ViewImageScreen;