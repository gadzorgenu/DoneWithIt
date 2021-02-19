import React,{ useState} from 'react';
import Screen from './app/components/Screen'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = uri => {
    setImageUris([...imageUris,uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri ))
  }

  return (
    <Screen>
       {/* <ImageInputList
          imageUri={imageUris} 
          // onChangeImage={uri => setImageUris(uri)}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        /> */}
       <ImageInputList
          imageUris={imageUris} 
          onAddImage={handleAdd}
          onChangeImage={uri => setImageUris(uri)}
          onRemoveImage={handleRemove}
        />
    </Screen>
  )
}



