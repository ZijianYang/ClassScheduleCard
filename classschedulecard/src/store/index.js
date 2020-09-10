import Vue from 'vue'
import Vuex from 'vuex'
import basic from './modules/basic'
import auth from './modules/auth'
// import products from './modules/products'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },

    modules: {
        basic:basic,
        auth:auth,
    },
    //   strict: debug,
    //   plugins: debug ? [createLogger()] : []
})