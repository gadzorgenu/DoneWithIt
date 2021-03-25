import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';
//PickerItem
function CategoryPickerItem({ item, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
        width:'34%'
    },
    label:{
        marginTop:5,
        textAlign:'center'
    }
})
export default CategoryPickerItem;