import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

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
    return Boolean(state.user && state.auth)
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

export const createStore = () => {
  return new Vuex.Store({
    state: {
      article: {}
    },
    mutations: {
      setArticle (state, data) {
        state.article = data
      }
    }
  })
}



