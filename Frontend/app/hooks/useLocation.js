import {useState, useEffect} from 'react'
import * as Location from 'expo-location'

export default useLocation = () =>{
    const [location, setLocation] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const {status} = await Location.requestPermissionsAsync()
                if( status !== 'granted') 
                   return alert('Permission to access location was denied');
                
               const {coords: { latitude,longitude}} = await Location.getLastKnownPositionAsync()
                setLocation({latitude,longitude})
                
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    return location
}
