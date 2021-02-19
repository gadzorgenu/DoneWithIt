import React,{ useState} from 'react';
import Screen from './app/components/Screen'
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Tweets = () => {
  return(
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  )
}

const TweetDetails = () => {
  return(
    <Screen>
      <Text>Tweets Details</Text>
    </Screen>
  )
}
const Stack = createStackNavigator()

const StackNavigator = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name='Tweets' component={Tweets}/>
      <Stack.Screen name='TweetDetails' component={TweetDetails}/>
    </Stack.Navigator>
  )
}
export default function App() {

  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )
}



