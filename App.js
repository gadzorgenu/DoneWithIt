import React,{useState} from 'react';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen';

export default function App() {

  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState()
  const categories=[
    {
      label: 'Furniture',
      value: 1
    },
    {
      label: 'Clothing',
      value: 2
    },
    {
      label: 'Cameras',
      value: 3
    }
  ]
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
    <LoginScreen/>
    );
}


