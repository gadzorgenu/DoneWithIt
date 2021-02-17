import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps}) {
    return (
       <View style={styles.container}>
           { icon && (
               <MaterialCommunityIcons
                    name={icon}
                    size={25}
                    color={defaultStyles.colors.meduim}
                    style={styles.icon}
               />
           )}
           <TextInput 
                placeholderTextColor={defaultStyles.colors.meduim}
                style={defaultStyles.text} {...otherProps}/>
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
    }
})
export default AppTextInput;