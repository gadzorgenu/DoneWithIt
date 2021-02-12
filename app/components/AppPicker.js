import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'
import defaultStyles from '../config/styles';

function AppPicker({ icon,placeholder, ...otherProps}) {
    return (
       <View style={styles.container}>
           { icon && (
               <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.meduim}
                    style={styles.icon}
               />
           )}
           <AppText style={styles.text}>{placeholder}</AppText>
           <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={defaultStyles.colors.meduim}
               />
           {/* <TextInput style={defaultStyles.text} {...otherProps}/> */}
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection:'row',
        width: '100%',
        padding: 12,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text:{
        flex: 1
    }
})
export default AppPicker;