import axios from 'axios'
import { BASE_URL, REQUEST_HEADERS } from './constants'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL,
  headers: REQUEST_HEADERS
})

export const UnauthorizeRequest = axios.create({
  baseURL: BASE_URL,
  headers: REQUEST_HEADERS
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.authorization = `${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    // response.data.username = 'test'
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request