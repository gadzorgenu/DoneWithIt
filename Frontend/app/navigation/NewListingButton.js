import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton({ onPress}) {
 return (
     <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons
                name='plus-circle'
                color={colors.white}
                size={30}
            />
        </View>
     </TouchableOpacity>
);
}

const styles = StyleSheet.create({
 container: {
     alignItems:'center',
     backgroundColor: colors.primary,
     borderRadius:35,
     borderColor:colors.white,
     borderWidth: 10,
     bottom: 20,
     height: 70,
     justifyContent: 'center',
     width: 70,
 }
});

export default NewListingButton;