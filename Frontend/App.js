import React,{ useState, useEffect} from 'react';
import Screen from './app/components/Screen'
import { Button, Text } from 'react-native';
import jwtDecode from 'jwt-decode'
import AppLoading  from 'expo-app-loading'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator'
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/authContext';
import authStorage from './app/auth/authStorage';


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
    const [user, setUser] = useState()

    // to show if the app is ready or not in other to control the splash screen
    const [isReady, setIsReady] = useState(false)

    const restoreToken = async () => {
    const token= await authStorage.getToken()
    if(!token) return

    setUser(jwtDecode(token))
    }

    if(!isReady){
      return (
         <AppLoading  
          startAsync={ restoreToken} 
          onFinish={() => setIsReady(true)}
          onError={(error)=> console.log(error)}
        />
      )
    }
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
      {  user ?  <AppNavigator /> : <AuthNavigator/> }
       </NavigationContainer>
    </AuthContext.Provider>
  )
}

