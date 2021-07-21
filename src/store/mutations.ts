import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.AUTH_LOGIN] (state: any, payload: any) {
    state.auth = payload
  },

  fetchList (state: any, payload: any) {
    state.board.contents = payload
  },

  addTask (state: any, payload: any) {
    state.board.contents_count += 1
    payload.id = state.board.contents_count
    state.board.contents.push(payload)
  },

  deleteTask (state: any, payload: any) {
    const list = state.board.contents.filter((obj: any) => obj.id !== payload.id)
    state.board.contents = list
  },

  updateTask (state: any, payload: any) {
    state.board.contents.some(function(obj: any, index: number) {
     if (obj.id === payload.id) Vue.set(state.board.contents, index, payload)
    })
  },

  [types.AUTH_LOGOUT] (state: any, payload: any) {
    state.auth = payload
  },

  RESET_VUEX_STATE(state: any) {
    window.localStorage.removeItem('vuex');
  },
}
