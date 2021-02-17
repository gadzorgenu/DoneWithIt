import React,{useState} from 'react';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState()
 
  return (
    // <Screen>
    //     <AppPicker  
    //       selectedItem ={category}
    //       onSelectItem={item => setCategory(item)}
    //       icon="apps" 
    //       items={categories} 
    //       placeholder='Category'
    //     />
    //   <AppTextInput icon="email" placeholder='Email'/>
    // </Screen>
   <ListingEditScreen/>
    );
}


