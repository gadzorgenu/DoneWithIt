// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,StatusBar, Platform, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello world!!</Text> */}
      <Button
        color='orange'
        title='Click Me'
      //   onPress={()=> Alert.alert('My title', 'My message',
      //   [{ text: 'Yes', onPress: ()=> console.log('Yes')},
      //   {text:'No', onPress: ()=>console.log('No')}])
      // }
      onPress={()=>
        Alert.prompt('My title','My message',text=>console.log(text))
      }
      />
      {/* <Image 
        source={require('./assets/icon.png')}
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
