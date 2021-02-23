import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation}) {
    return (
       <ImageBackground 
          blurRadius={6}
          style={styles.background}
          source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton title='Login' onPress={()=> navigation.navigate(routes.LOGIN)}/>
              <AppButton title='Register' color='secondary'  onPress={()=> navigation.navigate(routes.REGISTER)}/>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    buttonContainer:{
        padding: 20,
        width: '100%'
    },
    logo:{
        width:100,
        height:100,
    }, 
    logoContainer:{
        position:'absolute',
        top: 70,
        alignItems:'center'

    },
    tagLine:{
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})
export default WelcomeScreen;