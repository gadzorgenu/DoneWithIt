import React,{useEffect} from 'react';
import { StyleSheet, Alert,View,Image, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

function ImageInput({ imageUri, onChangeImage}) {

    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
          if( status !== 'granted'){
            alert('You need to enable permissions to access the library')
          }
        })()  
      }, [])

    const handlePress =() =>{
        if(!imageUri){
            selectImage()
        } else{
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => onChangeImage(null)},
                {text: 'No'}
            ])
        }
    }

    const selectImage = async () => {
        try {
          const result = await  ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
          })
          console.log(result)
    
          if (!result.cancelled){
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log(error)
        }
      }

 return (
     <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            { !imageUri && (
                <MaterialCommunityIcons 
                    color={colors.meduim}
                    name='camera'
                    size={40}
                />
            )}
        { imageUri && <Image source={{ uri: imageUri }} style={styles.image}/> }
            
        </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 container: {
     alignItems:'center',
     backgroundColor: colors.light,
     borderRadius: 15,
     height:100,
     justifyContent:'center',
     overflow:'hidden',
     width:100
 },
 image:{
     width: '100%',
     height: '100%'
 }
});

export default ImageInput;