import React from 'react';
//to pass properties without having to dreal a property at every level
import { useFormikContext} from 'formik'
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, value,width,...otherProps}) {
   const { setFieldTouched,setFieldValue, errors, touched, values}= useFormikContext()
    return (
       <>
         <AppTextInput 
            onBlur={()=> setFieldTouched(name) }
            onChangeText={text => setFieldValue(name, text)}
            value={values[name]}
            width={width}
            {...otherProps}
        />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
       </>
    );
}

export default AppFormField; 