import * as types from './mutation-types'
import { Auth, Task, List } from '../api'

export default {
  login: async ({ commit }: any, authInfo: any) => {
    return Auth.login(authInfo)
      .then(({ userId }: any) => {
        commit(types.AUTH_LOGIN, { userId })
      })
      .catch(err => { throw err })
  },

  fetchLists: async ({ commit }: any, info: any) => {
    return List.fetchLists(info)
      .then(({ lists }: any) => {
        commit('fetchLists', lists )
      })
      .catch(err => { throw err })

  },

  addTask: async ({ commit }: any) => {
    throw new Error('addTask action should be implemented')
  },

  updateTask: async ({ commit }: any, task: any) => {
    console.log("action")
    commit('updateTask', task)
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