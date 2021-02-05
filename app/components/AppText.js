import React from 'react';
import { Text, StyleSheet ,Platform } from 'react-native'

function AppText({ children}) {
    return (
        <Text style={styles.text} >{children}</Text>
    );
}


const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
        //spreading the platfrom object to copy its properties into the text object
        // ...Platform.select({
        //     ios:{
        //          fonSize: 20,
        //          fontFamily:'Avenir'
        //     },
        //     android: {
        //         fonSize: 18,
        //           fontFamily: 'Roboto'
        //     }
        // })

    }
})




export default AppText;