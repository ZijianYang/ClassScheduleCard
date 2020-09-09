import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import login from './login'
import account from './account'
import store from '../store'
Vue.use(VueRouter)


// 2. 定义路由
const RouterModel = new VueRouter({
  mode: 'history',
  base: '/', // 当后台路由有这个时候就要加上
  routes: [...home, ...login,...account]
})

//导航守卫
RouterModel.beforeEach((to, from, next) => {
  // 这个位置做一些关于传参，重定向等事情    
  if (!store.state.IsLogin) {
    // 比如这种重定向到登录页的操作，还有可能接参数（对于每个页面的参数就不要在这里写逻辑了）
    let requireLogin = to.matched.some(function(item){      // 是否需要登录
      return item.meta.Login
    })
    if (requireLogin) {
      //$store.dispatch('FedLogOut')
      //Toast.fail(I18n.t('requestErrText.pleaseLogin'))
      next({ name: 'login', params: { redirect: to.name } })
      return
    }
  }

  next()
})

// 3. 创建 router 实例，然后传 `routes` 配置
export default RouterModel