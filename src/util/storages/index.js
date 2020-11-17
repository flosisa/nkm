import { getToken, setToken, removeToken } from './tokenStorage'

const getStorage = session => (session ? sessionStorage : localStorage)

export {
  getStorage,
  getToken,
  setToken,
  removeToken,
}
