import { create } from 'apisauce'
import authStorage from '../auth/authStorage'
import cache from '../utility/cache'

//the apisauce library is used for calling apis. 
//It is a wrapper around axios, which shows standardized errors and transforms request/response objects easily
//Whenever you call a server, the underlining promise is already resolved so you don not have to add an extra trycatch block 
//just take the response to see if there is an error 

const apiClient = create({
    // url of your backend server. localhost doesn't work
    baseURL: 'http://192.168.8.126:9000'
})

apiClient.addAsyncRequestTransform(async(request) => {
    const authToken = await authStorage.getToken()
    if(!authToken) return
    request.headers['x-auth-token'] = authToken
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
  const response = await  get(url, params, axiosConfig)
  if(response.ok){
      cache.store(url, response.data)
      return response
  }

 const data = await cache.get(url)
 return data ? {ok: true, data} : response

}
export default apiClient
