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