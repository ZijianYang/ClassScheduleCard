import Vue from 'vue'

import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'
// import $ from 'jquery'

import App from './App.vue'

Vue.prototype.$ajax=axios
//是否启动生成消息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
