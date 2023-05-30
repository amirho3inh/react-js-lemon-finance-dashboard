import { useEffect, useState } from 'react'
import request, { UnauthorizeRequest } from '../tools/request'
import { getToken, removeToken, setToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  function logon (data) {
    setUser(data)
    setIsLoggedIn(true)
  }

  function login (data, callback) {
    UnauthorizeRequest({ url: `/auth/login?username=${data.username}&password=${data.password}`, method: 'get', data })
      .then(({ data }) => {
        logon(data.data)
        setLoginError(undefined)
        setToken(data.data.token)
      })
      .catch(error => {
        if(typeof error.response.data.message === 'string'){
          setLoginError(error.response.data.message)
          callback(error.response.data.message)
        }else{
          for (const [, value] of Object.entries(error.response.data.message)) {
            value.map(err => {
              setLoginError(err)
              callback(err)
              return null;
            })
          }
        }
      })
      .finally(() => callback(''))
  }

  function getUser () {
    request('/user/user-profile')
      .then(({ data }) => logon(data))
      .finally(() => setIsLoading(false))
  }

  function logout () {
    request('/auth/logout')
      .then(({ data }) => {
        removeToken()
        setUser({})
        setIsLoggedIn(false)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getToken() ? getUser() : setIsLoading(false) // eslint-disable-next-line
  }, [])

  return { user, isLoggedIn, isLoading, login, loginError, logout }
}