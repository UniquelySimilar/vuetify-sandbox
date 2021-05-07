import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Users from '@/components/Users'

const routes = [
  {
    path: '/',
    redirect: 'users'
  },
  {
    name: 'users',
    path: '/users',
    component: Users
  },
  {
    name: 'userDetail',
    path: '/users/:id',
    component: () => import('@/components/UserDetail'),
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})