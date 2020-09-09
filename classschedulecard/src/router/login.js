export default [
  {
    // 主登录页
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/Login')
  },
  {
    // 注册页
    path: '/login/register',
    name: 'register',
    meta: {
      keepAlive: true
    },
    component: () => import('@/components/login/Register')
  }
] 