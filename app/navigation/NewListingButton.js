import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function NewListingButton() {
 return (
<View style={styles.container}></View>
);
}

const styles = StyleSheet.create({
 container: {
     alignItems:'center',
     backgroundColor: colors.primary,
     borderRadius:35,
     borderColor:colors.white,
     borderWidth: 10,
     bottom: 20,
     height: 70,
     justifyContent: 'center',
     width: 70,
 }
});

export default NewListingButton;