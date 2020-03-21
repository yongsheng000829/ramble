import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "about" */ '../views/blog/Blog.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/One.vue')
      },
      {
        path: 'page',
        name: 'page',
        component: () => import(/* webpackChunkName: "about" */ '../views/page/Page.vue')
      },
      {
        path: 'relation',
        name: 'relation',
        component: () => import(/* webpackChunkName: "about" */ '../views/relation/Relation.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
