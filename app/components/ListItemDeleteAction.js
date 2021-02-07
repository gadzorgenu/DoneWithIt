import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from 'react-native'

import colors from '../config/colors';

function ListItemDeleteAction() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons 
                name='trash-can'
                size={35}
                color={colors.white }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;