import { AUTH_TOKEN } from 'Constants/storage'
import { getStorage } from '.'

export const getToken = () => (
  getStorage('session').getItem(AUTH_TOKEN)
)

export const setToken = value => {
  getStorage('session').setItem(AUTH_TOKEN, value)
}

export const removeToken = () => {
  getStorage('session').removeItem(AUTH_TOKEN)
}