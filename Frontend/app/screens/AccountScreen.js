import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title:'My Listings',
        icon:{
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
        targetScreen: 'Listings'
    },
    {
        title:'My Messages',
        icon:{
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({ navigation}) {
    const {user, logOut} = useAuth()

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/me.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data= {menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem= { 
                        ({item}) => <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={()=> navigation.navigate(item.targetScreen)}
                        />
                    } 
                />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon 
                        name='logout' 
                        backgroundColor='#ffe666'
                    />
                }
                onPress={() => logOut()}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen:{
        backgroundColor: colors.light
    }
})

export default AccountScreen;