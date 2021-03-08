import { Formik } from 'formik'
import React, { useState , useContext} from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup' 

import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import FormImagePicker from '../components/Forms/FormImagePicker'
import Screen from '../components/Screen'
import { ListingsContext } from '../context/listings'
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
    const { addListing } = useContext(ListingsContext)

    const initialValues = {
        title: '',
        price: '',
        description: '',
        category: null,
        images:[]
    }

     const  onSubmit = async (values, { resetForm}) => {
        try {
            let _response = null
            const formData = new FormData()
             formData = {...values}

            formData.append('title',values.title)
            formData.append('price',values.price)
            formData.append('categoryId',values.category.value)
            formData.append('description',values.description)
        
            values.images.forEach((image,index) => 
                data.append('images', {
                    name: 'image' + index, 
                    type: 'image/jpeg',
                    uri: image
                }))
                console.log('location',listing.location)
            if(listing.location)
            values.append('location', JSON.stringify(values.location))

            _response= await addListing(data)
            
            resetForm()
        } catch (error) {
            console.log(error)
        }

    //     const data = new FormData()
    //     data.append('title',listing.title)
    //     data.append('price',listing.price)
    //     data.append('categoryId',listing.category.value)
    //     data.append('description',listing.description)
    
    //     listing.images.forEach((image,index) => 
    //         data.append('images', {
    //             name: 'image' + index, 
    //             type: 'image/jpeg',
    //             uri: image
    //         }))
    //         // console.log('location',listing.location)
    //     if(listing.location)
    //     data.append('location', JSON.stringify(listing.location))
    
    //     console.log('data',data)
    //    return client.post('/listings', data)
    }

    return (
        <Screen  style={styles.container} >
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

const styles = StyleSheet.create({
    container:{
        padding: 10
    }
})

export default AddListingScreen