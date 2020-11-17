import axios from "axios"
import { apiHost, authServer } from "Constants/defaultValues"
import { getToken, removeToken } from "Util/storages"
import { path } from "ramda"

const apiServerOrigin = `http://${apiHost}`
const authServerOrigin = `http://${authServer}`

export const getHost = () => {
  // if (process.env.API_SERVER_HOST && process.env.API_SERVER_PORT) {
  //    return `http://${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/`
  // }

  return apiServerOrigin
}

export const redirectToLogout = () => {
  removeToken()
  //location.href = `${apiServerOrigin}${AUTH_API_URL}/out`
  location.href = authServerOrigin
}

const handleError = error => {
  const status = path(["response", "status"], error)

  if (status === 401 || status === 403) {
    redirectToLogout()
  }

  return Promise.reject(error)
}

const axiosDefaults = () => {
  axios.defaults.baseURL = getHost()
  axios.defaults.headers = getToken() && {
    Authorization: `Bearer ${getToken()}`,
  }
}

export const getAuthInstance = () => {
  axiosDefaults()
  const instance = axios.create()

  instance.interceptors.response.use(
    response => response,
    error => handleError(error)
  )

  return instance
}

export const getXlsInstance = () => {
  axiosDefaults()
  const instance = axios.create({
    responseType: "blob",
  })

  instance.interceptors.response.use(
    response => response,
    error => handleError(error)
  )

  return instance
}
