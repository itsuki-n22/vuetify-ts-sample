import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions"
//import getters from "./getters"
import mutations from "./mutations"
//import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: []
  }
}

export default new Vuex.Store({
  //getters,
  actions,
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production',
//  plugins: [createPersistedState()]
})