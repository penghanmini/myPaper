import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Layout = r => require.ensure([],() => r(require('@/pages/layout.vue')),'Layout');
const router= new Router({
  routes: [
    {
      path: '/',
      name: 'medical',
      component: Layout,
      children:[

      ],
    },
  ]
})
export default router
