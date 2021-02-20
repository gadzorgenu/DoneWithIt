// import React,{ useState} from 'react';
// import Screen from './app/components/Screen'
// import { Button, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'

// const route = useRoute()

// const Tweets = ({ navigation}) => {
//   return(
//     <Screen>
//       <Text>Tweets</Text>
//       <Button
//         title='View tweet'
//         onPress={()=> navigation.navigate('TweetDetails')}
//       />
//     </Screen>
//   )
// }

// const TweetDetails = () => {
//   return(
//     <Screen>
//       <Text>Tweets Details {route.params.id}</Text>
//     </Screen>
//   )
// }
// const Stack = createStackNavigator()

// const StackNavigator = () => {
//   return(
//     <Stack.Navigator> 
//       <Stack.Screen name='Tweets' component={Tweets}/>
//       <Stack.Screen name='TweetDetails' component={TweetDetails}/>
//     </Stack.Navigator>
//   )
// }
// export default function App() {

//   return (
//     <NavigationContainer>
//         <StackNavigator />
//     </NavigationContainer>
//   )
// }



import React from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';

function App(props) {
  return (
   <ListingEditScreen />
  );
}

export default App;

