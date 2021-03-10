import React,{ useState} from 'react';
import {StyleSheet} from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen';
import {
    AppForm, 
    AppFormField,
    ErrorMessage,
    SubmitButton
} from '../components/Forms'
import useAuth from '../auth/useAuth';
import authApi from '../api/auth'

const ValidationSchema =  Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string().required().label('Name'),
    password: Yup.string().required().min(6).label('Password')
})

const RegisterScreen = () => {
    const auth = useAuth()
    const [error, setError] = useState()

    const onSubmit = async (values) =>{
        console.log('values', values)
        const result = await authApi.register(values)
        if(!result.ok){
            if(result.data) setError(result.data.error)
            else{
                setError('An unexpected error occured')
                console.log('result', result)
            }
            return
        } 
            const { data: authToken} = await authApi.login(
                values.email,
                values.password
            )
            auth.logIn(authToken.token)

    }

    return (
       <Screen style={styles.container}>
            <AppForm initialValues={{
                email: '',
                name: '',
                password: ''
            }}
                onSubmit={onSubmit}
                validationSchema={ValidationSchema}
            >
                <ErrorMessage error={error} visible={error} /> 
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
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