import { Formik } from 'formik'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup' 

import { AppForm, SubmitButton } from '../components/Forms'
import FormImagePicker from '../components/Forms/FormImagePicker'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation'

const  validationSchema = Yup.object().shape({
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
    { label: 'Others',value:9,backgroundColor:'gray', icon:'calendar'}
  ]

const AddListingScreen = () => {
    const location = useLocation()

    const initialValues = {
        title: '',
        price: '',
        description: '',
        category: null,
        images:[]
    }

     const  onSubmit = () => {

    }

    return (
        <Screen>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                { ({values}) => (
                    <form>
                         <FormImagePicker
                            name='images'
                            value={values.images}
                        />
                        <AppFormField 
                                maxLength={255}  
                                name='title' 
                                placeholder='Title'
                                value={values.title}
                            />
                            <AppFormField
                                keyboardType='numeric'
                                maxLength={8}
                                name='price'
                                placeholder='Price'
                                width={120}
                                value={values.price}
                            />
                            <AppFormPicker
                                items={categories}
                                name='category'
                                numberOfColumns={3}
                                // PickerItemComponent={CategoryPickerItem}
                                placeholder='Category'
                                value={values.category.value}
                                width='50%'
                            />
                            <AppFormField
                                maxLength={255}
                                multiline
                                name='description'
                                numberOfLines={3}
                                placeholder='Description'
                                value={values.description}
                                />
                            <SubmitButton title='Post'/>
                    </form>
                )}
            </Formik>
        </Screen>
    )
}

export default AddListingScreen