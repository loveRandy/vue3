import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Eorror403 from '@/views/error/403.vue'
import Eorror404 from '@/views/error/404.vue'
import Login from '@/views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    meta: {
      keepAlive: false,
      title: '我是layout'
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          keepAlive: false,
          title: '首页'
        },
        component: () =>
          import(/* webpackChunkName: "layout" */ '@/views/index/index.vue')
      },
      {
        path: '/table',
        name: 'table',
        meta: {
          keepAlive: false,
          title: '表格'
        },
        component: () =>
          import(/* webpackChunkName: "layout" */ '@/views/table/index.vue')
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/403',
    name: '403',
    component: Eorror403
  },
  {
    path: '/404',
    name: '404',
    component: Eorror404
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
