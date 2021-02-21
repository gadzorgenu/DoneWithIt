import React,{ useState} from 'react';
import Screen from './app/components/Screen'
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';

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

const StackNavigator = () => {
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
        activeBackgroundColor: 'tomato',
        activeTintColor: 'white',
        inactiveBackgroundColor:'#eee',
        inactiveTintColor: 'black'
      }}
    >
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color,size}) => <MaterialCommunityIcons  name='home' size={size} color={color}/>
          }}
          name='Feed' component={Tweets}/>
        <Tab.Screen name='Account' component={Account}/>
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}



