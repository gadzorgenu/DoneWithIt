import React,{useState} from 'react';
import {Image, StyleSheet} from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
       <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <AppTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={text=> setEmail(text)}
                icon='email'
                placeholder='Email'
                //on works on IOS
                // textContentType='emailAddress'
            />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                placeholder='Password'
                onChangeText={text=> setPassword(text)}
                secureTextEntry
                // textContentType='password'
            />
            <AppButton
                title='Login'
                onPress={()=>console.log(email, password )}
            />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
export default LoginScreen;