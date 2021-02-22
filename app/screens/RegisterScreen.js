import React from 'react';
import {StyleSheet} from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen';
import {
    AppForm, 
    AppFormField,
    SubmitButton
} from '../components/Forms'

const ValidationSchema =  Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string().required().label('Name'),
    password: Yup.string().required().min(6).label('Password')
})

const RegisterScreen = () => {

    return (
       <Screen style={styles.container}>
            <AppForm initialValues={{
                email: '',
                name: '',
                password: ''
            }}
                onSubmit={ values => console.log('val', values )}
                validationSchema={ValidationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='user'
                    placeholder='Name'
                    name='name'
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    //on works on IOS
                    // textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    placeholder='Password'
                    name='password'
                    secureTextEntry
                    // textContentType='password'
                />
            <SubmitButton title='Register'/>
            </AppForm>
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:5
    }
})
export default RegisterScreen;