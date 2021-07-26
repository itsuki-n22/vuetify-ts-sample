import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const state = {
  auth: {
    userId: null
  },
  board: {
    contents_count: 3,
    contents: [
      {id: 1, title: "first action", description: "説明はこちら", status: 0},
      {id: 2, title: "second action", description: "説明はこちら", status: 0},
      {id: 3, title: "third action", description: "説明はこちら", status: 0},
    ],
  },

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()]
})