import Vuex from "vuex";

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    token: null,
    
  }
}


export const mutations = {
  setToken (state, token) {
    state.token = token
   
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



