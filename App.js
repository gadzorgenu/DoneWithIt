import React,{useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Screen from './app/components/Screen';
import { Text } from 'react-native';

export default function App() {

  const reqPerm = async () => {
   const { granted }  = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted)
    alert('You need to enable permission to access the library')
  }

useEffect(() => {
  reqPerm();
}, [])

  return (
   <Text> hi</Text>
  )
    
}


