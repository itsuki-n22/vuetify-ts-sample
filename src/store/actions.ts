import * as types from './mutation-types'
import { Auth, Task, List } from '../api'

export default {
  login: async ({ commit }: any, authInfo: any) => {
    return Auth.login(authInfo)
      .then(({ token, userId }: any) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
  },

  fetchLists: async ({ commit }: any) => {
    throw new Error('fetchLists action should be implemented')
  },

  addTask: async ({ commit }: any) => {
    throw new Error('addTask action should be implemented')
  },

  updateTask: async ({ commit }: any) => {
    throw new Error('updateTask action should be implemented')
  },

  removeTask: async ({ commit }: any) => {
    throw new Error('removeTask action should be implemented')
  },

  logout: async ({ commit }: any, authInfo: any) => {
    return Auth.logout(authInfo)
      .then(({ token, userId }: any) => {
        commit(types.AUTH_LOGOUT, { token, userId })
      })
      .catch(err => { throw err })
  },

}