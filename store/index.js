import Vuex from "vuex";
import Cookie from 'cookie'
import Cookies from 'js-cookie'

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    auth: null,
    user: null,
  }
}


export const mutations = {
  setAuth (state, auth) {
    state.auth = auth 
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
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  }
}



