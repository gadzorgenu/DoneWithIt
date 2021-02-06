import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, onPress}) {
    //TouchableHighlight gives an effect when the container is touched
    return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.light}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle:{
        color: colors.meduim
    },
    title:{
        fontWeight: '500'
    }
})
export default ListItem;