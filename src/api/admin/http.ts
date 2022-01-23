import axios from 'axios'
import emitter from '../../constants/api/emitter'
import { UNAUTHENTICATE, NOT_FOUND } from '../../constants/api/http'

const devApiHostUrl = 'http://localhost:8080'
const apiHostUrl = process.env.NEXT_PUBLIC_API_HOST_URL ? process.env.NEXT_PUBLIC_API_HOST_URL : devApiHostUrl
const apiUrl = apiHostUrl + 'api/admin/'

const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    return response
}), async (error) => {
    if (error.response.status === 404) {
        emitter.emit(NOT_FOUND)
        return new Promise(() => {})
    } else if (error.response.status === 401) {
        emitter.emit(UNAUTHENTICATE)
        return new Promise(() => {})
    } else {
        return Promise.reject(error)
    }
}

export default instance