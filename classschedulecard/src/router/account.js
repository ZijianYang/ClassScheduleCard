export default [
    {
      path: '/account',
      name: 'account',
      component: () => import('@/components/account/Account'),
      meta: { Login: true }
    }
  ] 