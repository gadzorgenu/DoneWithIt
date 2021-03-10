import { useContext} from 'react'
import AuthContext from "./authContext"
import authStorage from './authStorage'
import jwtDecode from 'jwt-decode'

export default useAuth = () => {
    const { user, setUser} = useContext(AuthContext)

    const logIn = ( authToken) => {
        // const user = jwtDecode(result.data.token)
        const user = jwtDecode(authToken)
        setUser(user)
        authStorage.storeToken(authToken)
    }

    const logOut = () => {
        setUser(null)
        authStorage.removeToken()
    }

    return {
        user, 
        logIn,
        logOut
    }
}