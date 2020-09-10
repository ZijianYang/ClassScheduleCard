// initial state
const state = () => ({
  Token: '',
  IsLogin: false,
})

// getters
const getters = {
}

// actions
const actions = {


}

// mutations
const mutations = {
  setToken(state, payload ) {
    state.Token = payload.Token;
  },
  setIsLogin(state, { isLogin }) {
    state.IsLogin = isLogin
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}