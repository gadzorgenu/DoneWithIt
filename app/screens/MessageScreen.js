import React from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const MessageScreen = () => {
    const messages = [
        {
            id: 1,
            title: 'T1',
            description: 'D1',
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/jacket.jpg')
        },
    ]
    return (
    <Screen >
        <FlatList
          data={ messages}
          keyExtractor={ message=> message.id.toString()}
          renderItem={({item}) => (
             <ListItem 
                title = {item.title}
                subTitle={item.description}
                image={item.image}
                onPress= {()=> console.log('Message', item)}
                renderRightActions={ListItemDeleteAction}
             />
          )}
          ItemSeparatorComponent={ListItemSeparator }
        />
    </Screen>
    );
}
const styles = StyleSheet.create({

})

export default MessageScreen;