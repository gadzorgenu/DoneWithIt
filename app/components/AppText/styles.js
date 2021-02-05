import { StyleSheet, Platform } from 'react-native'

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

export default styles