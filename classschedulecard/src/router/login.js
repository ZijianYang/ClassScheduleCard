export default [
  {
    // 主登录页
    path: '/login/:redirect',
    name: 'login',
    component: () => import('@/components/login/Login'),
    props: true
  },
  {
    // 注册页
    path: '/register',
    name: 'register',
    component: () => import('@/components/login/Register')
  }
] 