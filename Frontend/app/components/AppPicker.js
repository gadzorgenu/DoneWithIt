import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Button,Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'
import defaultStyles from '../config/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

const AppPicker = (
    { 
        icon,
        items,
        onSelectItem, 
        PickerItemComponent = PickerItem,
        placeholder, 
        numberOfColumns = 1,
        selectedItem, 
        width ='100%'
    }
) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
                <View style={[styles.container,{width}]}>
                    { icon && (
                        <MaterialCommunityIcons
                                name={icon}
                                size={25}
                                color={defaultStyles.colors.meduim}
                                style={styles.icon}
                        />
                    )}
                    { selectedItem ? ( 
                        <AppText style={styles.text}>{selectedItem.label}</AppText> 
                        ): ( <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    
                    <MaterialCommunityIcons
                                name="chevron-down"
                                size={20}
                                color={defaultStyles.colors.meduim}
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button
                    title='Close'
                    onPress={()=> setModalVisible(false)}
                />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item}) =>
                         <PickerItemComponent 
                            item={item}
                            label={item.label} 
                            onPress={() => {
                                setModalVisible(false)
                                onSelectItem(item)
                            }}
                        />
                    }
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection:'row',
        padding: 12,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    placeholder:{
        color: defaultStyles.colors.meduim,
        flex: 1
    },
    text:{
        flex: 1
    }
})
export default AppPicker;