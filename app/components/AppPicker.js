import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Button,Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'
import defaultStyles from '../config/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items,onSelectItem, placeholder, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
                <View style={styles.container}>
                    { icon && (
                        <MaterialCommunityIcons
                                name={icon}
                                size={25}
                                color={defaultStyles.colors.meduim}
                                style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                                name="chevron-down"
                                size={20}
                                color={defaultStyles.colors.meduim}
                        />
                    {/* <TextInput style={defaultStyles.text} {...otherProps}/> */}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button
                    title='close'
                    onPress={()=> setModalVisible(false)}
                />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={
                        ({item}) => <PickerItem label={item.label} onPress={()=>{
                            setModalVisible(false)
                            onSelectItem(item)
                        }}/>
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
        width: '100%',
        padding: 12,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text:{
        flex: 1
    }
})
export default AppPicker;