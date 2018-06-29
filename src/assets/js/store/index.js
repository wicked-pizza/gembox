import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      name: 'Gembox',
      data: null
    },
    actions: {
      SET_DATA: ({ commit }, { data }) => {
        commit('SET_DATA', { data })
      }
    },
    mutations: {
      SET_DATA: (state, { data }) => {
        state.data = data
      }
    },
    getters: {
      name (state) {
        return state.name
      },
      data (state) {
        console.log(state.data)
        return state.data
      }
    }
  })
}