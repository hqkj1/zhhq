import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/Layout/Layout'
import Home from '@/containers/Home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
      // name: 'layout',
      component: Layout,
      children: [
        { path: '/', redirect: '/home' },
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
     }
  ]
})
