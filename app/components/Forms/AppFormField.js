import React from 'react';
//to pass properties without having to dreal a property at every level
import { useFormikContext} from 'formik'
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...otherProps}) {
   const { setFieldTouched, handleChange, errors, touched}= useFormikContext()
    return (
       <>
         <AppTextInput 
            onBlur={()=> setFieldTouched(name) }
            onChangeText={handleChange(name)}
            {...otherProps}
        />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
       </>
    );
}

export default AppFormField; 