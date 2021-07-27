import * as types from './mutation-types'
import { Auth, List } from '../api'

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

  addList: async ({ commit }: any, info: any) => {
    return List.addList(info)
      .then(( list : any) => {
        commit('addList', list )
      })
      .catch(err => { throw err })
  },

  updateList: async ({ commit }: any, info: any) => {
    return List.updateList(info)
      .then(( list : any) => {
        commit('updateList', list)
      })
      .catch(err => { throw err })
  },

  deleteList: async ({ commit }: any, info: any) => {
    return List.deleteList(info)
      .then((list: any) => {
        commit('deleteList', list)
      })
      .catch(err => { throw err })
  },

  logout: async ({ commit }: any, authInfo: any) => {
    return Auth.logout(authInfo)
      .then(({ token, userId }: any) => {
        commit(types.AUTH_LOGOUT, { token, userId })
      })
      .catch(err => { throw err })
  },

}