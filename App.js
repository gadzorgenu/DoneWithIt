import React,{useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

export default function App() {

const [imageUri, setImageUri] = useState()

  const requestPermmission = async () => {
   const { granted }  = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted)
    alert('You need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermmission();
  }, [])

  const selectImage = async ()=>{
    try {
      const result = ImagePicker.launchImageLibraryAsync()
      if(!result.cancelled){
        setImageUri(result.uri)
      }
    } catch (error) {
      console.log('Error',error)
    }
  }

  return (
   <Screen> 
      <Button title='Select Image' onPress={selectImage}/>
      <Image source={{ uri: imageUri }} style={{ width: 200, height:200}}/>
      <ImageInput imageUri={imageUri}/>
   </Screen>
  )
    
}


