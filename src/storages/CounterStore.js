import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 1
  },

  getters: { // getters ara like computed properties
    counter(state) {
      return state.count
    }
  },

  mutations: { // Mutations are SYNC
    INCREASE(state, payload) {
      state.count++
    },
    DECREASE(state, payload) {
      state.count--
    }
  },
  
  actions: { // Actions can be ASYNC
    increase(context, payload) {
      context.commit('INCREASE')
    },
    decrease(context, payload) {
      context.commit('DECREASE')
    }
  }
})
