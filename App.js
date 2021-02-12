import React,{useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false)
  return (
    <Screen>
      {/* <Text>{firstName}</Text>
      <TextInput 
          maxLength={5}
          // secureTextEntry
          // keyboardType='numeric'
          onChangeText={(text) => setFirstName(text)}
          placeholder='First Name'
          style={{
            borderBottomColor:'#ccc',
            borderBottomWidth: 1
          }}
      /> */}
      {/* <AppTextInput placeholder='Username'/> */}
      <Switch value={isNew} onValueChange={ (newValue) => setIsNew(newValue)}/>
    </Screen>
    );
}


