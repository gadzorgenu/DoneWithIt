import React from 'react';
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';

import{
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/Forms'
import Screen from '../components/Screen';
import FormImagePicker from '../components/Forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1,'Select at least one image.')
})

const categories=[
    { label: 'Furniture',value: 1, backgroundColor:'red', icon:'lamp' },
    { label: 'Cars',value: 2, backgroundColor:'orange',icon:'car'},
    { label: 'Camera',value: 3, backgroundColor:'yellow', icon:'camera'},
    { label: 'Games',value:4,backgroundColor:'pink', icon:'cellphone-sound'},
    { label: 'Clothing',value:5,backgroundColor:'green', icon:'shoe-heel'},
    { label: 'Sports',value:6,backgroundColor:'blue', icon:'football'},
    { label: 'Movies & Music',value:7,backgroundColor:'blue', icon:'headphones'},
    { label: 'Books',value:8,backgroundColor:'violet', icon:'book-open'},
    { label: 'Others',value:9,backgroundColor:'gray', icon:'calendar'},
  ]

function ListingEditScreen () {
    return (
       <Screen style={styles.container} >
           <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images:[]
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
           >
               <FormImagePicker
                    name='images'
               />
               <AppFormField 
                    maxLength={255}  
                    name='title' 
                    placeholder='Title'
                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder='Category'
                    width='50%'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                    />
                <SubmitButton title='Post'/>         
          </AppForm>
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    }
})
export default ListingEditScreen;