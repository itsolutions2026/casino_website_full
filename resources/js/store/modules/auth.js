import axios from 'axios'
import {
  AUTH_CLEAR_USER,
  AUTH_UPDATE_USER_ACCOUNT_BALANCE,
  AUTH_UPDATE_USER,
  AUTH_UPDATE_USER_XUMM_INSTANCE
} from '../mutation-types'

// state
export const state = {
  user: window.user,
  account: window.user ? window.user.account : null,
  xummInstance: null
}

// getters
export const getters = {
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [AUTH_CLEAR_USER] (state) {
    state.user = null
    state.account = null

    try{
      state.xummInstance && state.xummInstance.instance === '1'?state.xummInstance.logout():''
    }
    catch (e){
      //
    }

    state.xummInstance = null
  },

  [AUTH_UPDATE_USER] (state, user) {
    state.user = user
    state.account = user.account
  },

  [AUTH_UPDATE_USER_ACCOUNT_BALANCE] (state, balance) {
    state.account.balance = balance
  },

  [AUTH_UPDATE_USER_XUMM_INSTANCE](state, instance){
    state.xummInstance = instance
  }
}

// actions
export const actions = {
  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/api/user')

      commit(AUTH_UPDATE_USER, data)
    } catch (e) {
      //
    }
  },

  clearUser ({ commit }) {
    commit(AUTH_CLEAR_USER)
  },

  updateUser ({ commit }, payload) {
    commit(AUTH_UPDATE_USER, payload)
  },

  updateUserAccountBalance ({ commit }, balance) {
    commit(AUTH_UPDATE_USER_ACCOUNT_BALANCE, balance)
  },

  updateXummInstance ({commit}, instance){
    commit(AUTH_UPDATE_USER_XUMM_INSTANCE, instance)
  },

  async logout ({ commit }) {
    try {
      await axios.post('/api/auth/logout')
    } catch (e) {
      //
    }
    commit(AUTH_CLEAR_USER)
  }
}
