import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ImageInput({imageUri}) {
 return (
    <View style={styles.container}>
        { !imageUri ? (
            <MaterialCommunityIcons 
                color={colors.meduim}
                name='camera'
                size={40}
            /> 
            ): (
                <Image source={{ uri: imageUri }} style={styles.image}/>
            ) 
        }
        
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
     alignItems:'center',
     backgroundColor: colors.light,
     borderRadius: 15,
     height:100,
     width:100,
     justifyContent:'center'
 },
 image:{
     width: '100%',
     height: '100%'
 }
});

export default ImageInput;