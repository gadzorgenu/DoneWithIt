import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'

const Tab = createBottomTabNavigator()
const  AppNavigator = () => {
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
                options={{
                    tabBarButton: ()=> <NewListingButton/>,
                    tabBarIcon: ({color, size})=> 
                    <MaterialCommunityIcons 
                        color={color}
                        name='plus-circle'
                        size={size}
                    />
                }}
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