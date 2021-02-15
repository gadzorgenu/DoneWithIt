import React from 'react';
import {Image, StyleSheet} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage'
import Screen from '../components/Screen';

const ValidationSchema =  Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
})

function LoginScreen(props) {

    return (
       <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                onSubmit={ values => console.log('val', values )}
                validationSchema={ValidationSchema}
            >
                {({ handleChange, handleSubmit ,errors}) => 
                    (
                        <>
                             <AppTextInput 
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='email'
                                keyboardType='email-address'
                                onChangeText={handleChange('email')}
                                placeholder='Email'
                                //on works on IOS
                                // textContentType='emailAddress'
                            />
                            <ErrorMessage error={errors.email} />
                            <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='lock'
                                placeholder='Password'
                                onChangeText={handleChange('password')}
                                secureTextEntry
                                // textContentType='password'
                            />
                            <ErrorMessage error={errors.password} />
                            <AppButton
                                title='Login'
                                onPress={handleSubmit}
                            />
                        </>
                    )
                }
            </Formik>
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