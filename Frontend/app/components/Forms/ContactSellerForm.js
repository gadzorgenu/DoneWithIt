import React from 'react';
import { Alert, Keyboard, StyleSheet, View } from 'react-native';
import { AppFormField, SubmitButton } from '.';

function ContactSellerForm({ listing}) {
 
    // const handleSubmit = async ( { message}, {resetForm}) => {
    //     Keyboard.dismiss()

    //     const result = await messagesApi.send(message, listing.id)
        
    //     if(!result.ok){
    //         console.log('error', result)
    //         return Alert.alert('Error', 'Could not send message to seller')
    //     }

    //     resetForm()

    // }
 
 return (
    <View style={styles.container}>
        <AppFormField 
            placeholder = 'Is this still available ?'
        />
        <SubmitButton title='Contact Seller'/>
    </View>
    );
}

const styles = StyleSheet.create({
 container: {
     padding: 10
 }
});

export default ContactSellerForm;