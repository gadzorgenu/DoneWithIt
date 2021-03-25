import React,{useEffect, useState} from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
// import * as Notifications from 'expo-notifications'
// import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import { Platform } from 'react-native'

const Tab = createBottomTabNavigator()

const  AppNavigator = () => {

    // const [expoPushToken, setExpoPushToken] = useState('')

    // useEffect(() => {
    //   registerForPushNotifications().then(token => setExpoPushToken(token))
    // }, [])

    const registerForPushNotifications = async() => {

            // if (Constants.isDevice) {
            //   const { status: existingStatus } = await Notifications.getPermissionsAsync();
            //   let finalStatus = existingStatus;
            //   if (existingStatus !== 'granted') {
            //     const { status } = await Notifications.requestPermissionsAsync();
            //     finalStatus = status;
            //   }
            //   if (finalStatus !== 'granted') {
            //     alert('Failed to get push token for push notification!');
            //     return;
            //   }
            //   const token = (await Notifications.getExpoPushTokenAsync()).data;
            //   console.log(token);
            //   this.setState({ expoPushToken: token });
            // } else {
            //   alert('Must use physical device for Push Notifications');
            // }
          
            // if (Platform.OS === 'android') {
            //   Notifications.setNotificationChannelAsync('default', {
            //     name: 'default',
            //     importance: Notifications.AndroidImportance.MAX,
            //     vibrationPattern: [0, 250, 250, 250],
            //     lightColor: '#FF231F7C',
            //   });
            // }
        // let token;
        // // try {
        //     if(Constants.isDevice){
        //         const {status: existingStatus } = await Notifications.getPermissionsAsync()
        //         let finalStatus = existingStatus

        //         if (existingStatus !== 'granted'){
        //             const { status } = await Notifications.requestPermissionsAsync()
        //             finalStatus = status
        //         }
        //         if( finalStatus !== 'granted'){
        //             alert('Failed to get push token for notification')
        //             return
        //         }
        //         token =  ( await Notifications.getExpoPushTokenAsync()).data
        //         console.log('token',token)
        //     }else {
        //         alert('Must use physical device for push Notification')
        //     }

        //     if (Platform.OS === 'android'){
        //         Notifications.setNotificationChannelAsync('default', {
        //             name: 'default',
        //             importance: Notifications.AndroidImportance.MAX,
        //             vibrationPattern: [0, 250,250,250],
        //             lightColor: '#FF231F7C'
        //         })
        //     }
        //     return token

        // // } catch (error) {
        // //     console.log('Error getting a push token', error)
        // // }
    }

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Feed' 
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({color, size})=> 
                    <MaterialCommunityIcons 
                        color={color}
                        name='home'
                        size={size}
                    />
                }}
            />
            <Tab.Screen 
                name='ListingEdit' 
                component={ListingEditScreen}
                options={({ navigation })=> (
                {
                    tabBarButton: () => 
                        <NewListingButton onPress={() => navigation.navigate('ListingEdit') }/>,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons 
                            color={color}
                            name='plus-circle'
                            size={size}
                        />
                )}) }
            />
            <Tab.Screen 
                name='Account' 
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({color, size})=> 
                    <MaterialCommunityIcons 
                        color={color}
                        name='account'
                        size={size}
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator