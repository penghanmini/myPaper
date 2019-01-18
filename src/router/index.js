import Vue from 'vue'
import Router from 'vue-router'
import Category from './category/category'

Vue.use(Router)
const Layout = r => require.ensure([],() => r(require('@/pages/layout.vue')),'Layout');

const router= new Router({
  routes: [
    {
      path: '/index',
      name: 'Layout',
      component: Layout,
      children:[
        ...Category,

      ],
    },
  ]
})
export default router
