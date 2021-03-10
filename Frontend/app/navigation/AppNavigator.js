import React,{useEffect} from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'

const Tab = createBottomTabNavigator()

const  AppNavigator = () => {

    useEffect(() => {
      registerForPushNotifications()
    }, [])

    const registerForPushNotifications = async() => {
        let token;
        try {
            if(Constants.isDevice){
                const {status: existingStatus } = await Notifications.getPermissionsAsync()
                let finalStatus = existingStatus

                if (existingStatus !== 'granted'){
                    const { status } = await Notifications.requestPermissionsAsync()
                    finalStatus = status
                }
                
            }
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    
            if(!permission.granted) return
    
           const token = await Notifications.getExpoPushTokenAsync()
    
           console.log('token', token)
        } catch (error) {
            console.log('Error getting a push token', error)
        }
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