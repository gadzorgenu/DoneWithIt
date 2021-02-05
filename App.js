import React from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './app/components/AppText'
export default function App() {
  
  return (
   <View
      style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      }}
   >
      <MaterialCommunityIcons 
        name='email' 
        size={60} 
        color='dodgerblue'
      />
   </View>
  );
}


