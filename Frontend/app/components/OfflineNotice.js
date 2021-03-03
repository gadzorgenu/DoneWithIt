import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import Constants from 'expo-constants'
import colors from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo'

function OfflineNotice() {
    const netInfo = useNetInfo()
    console.log(netInfo)
 return (
<View style={styles.container}>
    <AppText style={styles.text}> No Internet Connection</AppText>
</View>
);
}

const styles = StyleSheet.create({
 container: {
     alignItems: 'center',
     backgroundColor: colors.primary,
     height: 50,
     position: "absolute",
     justifyContent: 'center',
     top: Constants.statusBarHeight,
     width:'100%',
     zIndex: 1
 },
 text : {
    color: colors.white
 }
});

export default OfflineNotice;