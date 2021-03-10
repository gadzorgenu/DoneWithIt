import client from './client'

const login = ( email, password) => {
    client.post('/login', { email, password})
}

export default {
    login
}