import Vuex from "vuex";
import Cookie from 'cookie'
import Cookies from 'js-cookie'

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    token: null,
    user: null,
  }
}


export const mutations = {
  setToken (state, token) {
    state.token = token 
  },
  setUser (state, user) {
    state.user = user
  },
}

export const getters = {
  loggedIn (state) {
    return Boolean(state.user && state.token)
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = JSON.parse(parsed.token)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setToken', token)
  }
}



