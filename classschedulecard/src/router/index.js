import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import login from './login';
Vue.use(VueRouter)


// 2. 定义路由
const RouterModel = new VueRouter({
  mode: 'history',
  base: '/', // 当后台路由有这个时候就要加上
  routes: [...home,  ...login]
})

// 3. 创建 router 实例，然后传 `routes` 配置
export default RouterModel