import React, { createContext} from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import axios from 'axios'

export const ListingsContext = createContext()

const ListingsContextProvider = ({children}) => {
    
    const addListing = async ( listing) => {
        try {
            await axios({
                method:'POST',
                url:'http://192.168.8.126:9000/listings',
                body: listing
            })
        } catch (error) {
            return error 
        }
    }

    return(
        <ListingsContext.Provider
            value={{
                addListing
            }}
        >
            {children}
        </ListingsContext.Provider>
    )
}

ListingsContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ListingsContextProvider