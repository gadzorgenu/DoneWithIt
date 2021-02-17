import React,{useState} from 'react';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessageScreen from './app/screens/MessageScreen';

export default function App() {

  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState()
 
  return (

   <ListingEditScreen/>
    );
}


