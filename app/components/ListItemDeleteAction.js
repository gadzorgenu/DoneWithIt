import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';

const ListItemDeleteAction = ({onPress={onPress}})=> {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name='trash-can'
                    size={35}
                    color={colors.white }
                />
            </View>
        </TouchableWithoutFeedback>
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