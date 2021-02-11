import React, {useState} from 'react';
import { FlatList,StyleSheet  } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
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

function MessageScreen() {
    const [messages, setMessages] = useState(initialMessages)

    const handleDelete = message => {
        //Delete message from the message array
        const newMessages = messages.filter(e => e.id !== message.id)
        setMessages(newMessages)
    }

   
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
                renderRightActions={()=> 
                <ListItemDeleteAction 
                    onPress={() => handleDelete(item)}
                />}
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