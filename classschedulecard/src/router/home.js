// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/helloworld/:msg', component: HelloWorld, props: true }
// ]
export default [
  {
    path: '/',
    component:() => import('@/components/LayoutDefault'),
    children: [
      {
        path: '',
        components: {
          top: () => import('@/components/Navbar'),
          default: () => import('@/components/home/Home')
        }
      }

    ]
  }
] 