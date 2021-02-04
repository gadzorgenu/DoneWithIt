import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
          style={styles.background}
          source={require('../assets/background.jpg')}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <View style={styles.loginButton} >
              </View>
              <View style={styles.registerButton} >
              </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    loginButton:{
        width: '100%',
        height: 50,
        backgroundColor: '#fc5c65'
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top: 70
    }, 
    registerButton:{
        width:'100%',
        height:50,
        backgroundColor:'#4ecdc4'
    }
})
export default WelcomeScreen;