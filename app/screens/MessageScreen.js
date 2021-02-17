import React, {useState} from 'react';
import { FlatList,StyleSheet  } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'wehfjjkhf wkjfhiuef kjdfh skjvfh ksjfv ksjdf skjfhv skjfhvs kdjvhfksjdv skjbsevfb kewjrhh skejfbvsvd skdjfhvksd vxkjfdv',
        description: 'slgj ero gh;uer greug ekjrhgvruirjeg kjre hgurnvfd,mnvjker hguir reoigv jkh guiver grejk hgvfd drgfuherr eugfvhrfegrie gvdrguhrj gfvlr gvurg ru yguirgtyvdg r yleruvliufy griue ygfviudkygirgyr7 reyfu rle ',
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
    const [refreshing, setRefreshing] = useState(false)

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
          //handling page refresh
          refreshing = {refreshing}
          onRefresh={() => {
              setMessages([
                  {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/jacket.jpg')
                  }
              ])
          }}
        />
    </Screen>
    );
}
const styles = StyleSheet.create({

})

export default MessageScreen;