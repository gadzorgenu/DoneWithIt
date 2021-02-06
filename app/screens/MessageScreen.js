import React from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const MessageScreen = (props) => {
    const messages=[
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
              title={item.title}
              subTitle={item.description}
              image={item.image}
          />
          )}
          ItemSeparatorComponent={() =>  }
        />
    </Screen>
    );
}
const styles = StyleSheet.create({

})

export default MessageScreen;