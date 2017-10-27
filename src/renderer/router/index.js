import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'password',
      component: require('@/components/Password').default
    },
    {
      path: '/main',
      name: 'main',
      component: require('@/components/Main').default
    },
    {
      path: '/tags',
      name: 'tags',
      component: require('@/components/Tags').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
