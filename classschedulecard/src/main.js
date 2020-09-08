import Vue from 'vue'

import router from './router.js'
import store from './store'

import 'bootstrap'
//import $ from 'jquery'

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
