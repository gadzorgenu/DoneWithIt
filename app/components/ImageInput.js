import React,{useEffect} from 'react';
import { StyleSheet, Alert,View, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

function ImageInput({ imageUri, onChangeImage}) {

    const requestPermmission = async () => {
        const { granted }  = await ImagePicker.requestMediaLibraryPermissionsAsync()
         if(!granted)
         alert('You need to enable permission to access the library')
       }

    useEffect(() => {
        requestPermmission()
    }, [])

    const handlePress =() =>{
        if(!imageUri){
            selectImage()
        } else{
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: ()=>onChangeImage(null)},
                {text: 'No'}
            ])
        }
    }

    const selectImage = async ()=>{
        try {
          const result = ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          })
          if(!result.cancelled){
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log('Error',error)
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
                /> )
            }
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
     width:100,
     justifyContent:'center'
 },
 image:{
     width: '100%',
     height: '100%'
 }
});

export default ImageInput;