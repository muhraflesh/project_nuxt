import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import VuexPersistence from 'vuex-persist'
const cookieparser = process.server ? require('cookieparser') : undefined

const vuexCookie = new VuexPersistence({
})

Vue.use(Vuex)

export const state = () => {
  return {
    auth: null,
    article : {},
    user: null,
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

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth 
  },
  setUser (state, user) {
    state.user = user
  },
  setData (state, datauser) {
    state.data = datauser
  },
  setTeam (state, team) {
    state.team = team
  },
  setHrd (state, hrd) {
    state.hrd = hrd
  },
  setLeader (state, leader) {
    state.leader = leader
  },
  setAllprofile (state, data) {
    state.allprofile = data
  },
  setAlluser (state, data) {
    state.alluser = data
  },
}

export const plugins = [
  vuexCookie.plugin
]






