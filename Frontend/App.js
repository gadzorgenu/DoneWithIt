import React,{ useState} from 'react';
import Screen from './app/components/Screen'
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import AuthNavigator from './app/navigation/AuthNavigator'
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

const Tweets = ({ navigation}) => {
 
  return(
    <Screen>
      <Text>Tweets</Text>
      <Button
        title='View tweet'
        onPress={()=> navigation.navigate('TweetDetails',{id: 1})}
      />
    </Screen>
  )
}

const TweetDetails = ({ route}) => {
  // const route = useRoute()
  console.log(route)
  return(
    <Screen>
      <Text>Tweets Details{route.params.id} </Text>
    </Screen>
  )
}
const Stack = createStackNavigator()

const FeedNavigator = () => {
  return(
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue'},
        headerTintColor: 'white',
      }}
    > 
      <Stack.Screen name='Tweets' component={Tweets}/>
      <Stack.Screen 
        name='TweetDetails' 
        component={TweetDetails}/>
    </Stack.Navigator>
  )
}
const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
}

const Tab = createBottomTabNavigator()
const TabNavigator = () =>{
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor:'#eee',
        inactiveTintColor: 'black'
      }}
    >
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color,size}) => <MaterialCommunityIcons  name='home' size={size} color={color}/>
          }}
          name='Feed' component={FeedNavigator}/>
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size}) => <MaterialCommunityIcons name='user-circle' size={size} color={color}/>
          }} 
          name='Account' 
          component={Account}/>
    </Tab.Navigator> 
  )
}

export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
          <AuthNavigator />
      </NavigationContainer>
    </>
  )
}

// import React from 'react'
// // import NetInfo, { useNetInfo} from '@react-native-community/netinfo'
// import { Button } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'


// export default function App () {
//   // const netInfo = useNetInfo()

//   const d = async() => {
//     try {
//       await  AsyncStorage.setItem('person', JSON.stringify({ id: 1}))
//      const value = await AsyncStorage.getItem('person')
//       const person = JSON.parse(value)
//       console.log(person)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   d()
//  return null
// }

