import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    TouchableHighlight
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({ 
    title, 
    subTitle, 
    image, 
    IconComponent,
    onPress, 
    renderRightActions 
}) => {
    //TouchableHighlight & TouchableOpacity gives an effect when the container is touched
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor= { colors.light}
                onPress = {onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image  style={styles.image} source={image} /> }  
                    <View style={styles.detailsContainer}> 
                        <AppText 
                            style={styles.title} 
                            numberOfLines={1}
                        >
                            {title}
                        </AppText>
                        {subTitle && <AppText 
                            style={styles.subTitle} 
                            numberOfLines={2}
                        >
                            {subTitle}
                        </AppText> }
                    </View>
                    <MaterialCommunityIcons 
                        name='chevron-right' 
                        size={25}
                        color={colors.meduim}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.white  
    },
    detailsContainer:{
        flex:1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle:{
        color: colors.meduim
    },
    title:{
        fontWeight: '500'
    }
})
export default ListItem;


// function ListItem({ title, subTitle, image, onPress, renderRightActions}) {
//     //TouchableHighlight gives an effect when the container is touched
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <TouchableHighlight 
//                 onPress={onPress}
//                 underlayColor={colors.light}
//             >
//                 <View style={styles.container}>
//                     <Image
//                         style={styles.image}
//                         source={image}
//                     />
//                     <View>
//                         <AppText style={styles.title}>{title}</AppText>
//                         <AppText style={styles.subTitle}>{subTitle}</AppText>
//                     </View>
//                 </View>
//             </TouchableHighlight>
//         </Swipeable>
//     );
// }