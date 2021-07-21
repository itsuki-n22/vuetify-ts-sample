import * as types from './mutation-types'

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
     console.log("add")
     console.log(state.board.contents)
  },

  deleteTask (state: any, payload: any) {
    const list = state.board.contents.filter((obj: any) => obj.id !== payload.id)
    state.board.contents = list
  },

  updateTask (state: any, payload: any) {
    state.board.contents.some(function(obj: any, index: number) {
     if (obj.id === payload.id) state.board.contents[index] = payload
    })
     console.log("mutation 100")
     console.log(state.board.contents)
  },

  [types.AUTH_LOGOUT] (state: any, payload: any) {
    state.auth = payload
  },

  RESET_VUEX_STATE(state: any) {
    window.localStorage.removeItem('vuex');
  },
}
