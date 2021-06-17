import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'icon-comments',
      single: true
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-youxiang'
        }
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    name: 'Demo',
    redirect: '/demo/table',
    meta: {
      title: '组件',
      icon: 'icon-product'
    },
    children: [
      {
        path: '/demo/table',
        name: 'Table',
        component: () => import('@/views/demo/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'icon-packing-labeling'
        }
      },
      {
        path: '/demo/icon',
        name: 'Icon',
        component: () => import('@/views/demo/icon/index.vue'),
        meta: {
          title: '图标',
          icon: 'icon-trade-assurance'
        }
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    hidden: true
  }
]

export const asyncRoutes = [
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: '/error/403',
    meta: {
      title: '错误页',
      icon: 'icon-logistic-logo'
    },
    children: [
      {
        path: '/error/403',
        name: 'Error403',
        component: () => import('@/views/error/403.vue'),
        meta: {
          title: '403',
          icon: 'icon-fencengpeizhi'
        }
      },
      {
        path: '/error/404',
        name: 'Error404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: '404',
          icon: 'icon-tongguanshuju'
        }
      }
    ]
  },
  {
    path: '/echart',
    component: Layout,
    name: 'echart',
    redirect: '/echart/bar',
    meta: {
      title: '动态路由测试',
      icon: 'icon-searchcart'
    },
    children: [
      {
        path: '/echart/bar',
        name: 'Bar',
        component: () => import('@/views/echart/bar/index.vue'),
        meta: {
          title: '路由测试1',
          icon: 'icon-raw'
        }
      },
      {
        path: '/echart/line',
        name: 'Line',
        component: () => import('@/views/echart/line/index.vue'),
        meta: {
          title: '路由测试2',
          icon: 'icon-share'
        }
      },
      {
        path: '/echart/pie',
        name: 'Pie',
        component: () => import('@/views/echart/pie/index.vue'),
        meta: {
          title: '路由测试3',
          icon: 'icon-zhanghucaozuo'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: Layout,
    redirect: '/system/account/index.vue',
    meta: {
      title: 'system',
      icon: 'icon-Foreigncurrency'
    },
    children: [
      {
        path: '/system/account',
        name: 'account',
        component: () => import('@/views/system/account/index.vue'),
        meta: {
          title: 'account',
          icon: 'icon-Foreigncurrency'
        }
      },
      {
        path: '/system/group',
        name: 'group',
        component: () => import('@/views/system/group/index.vue'),
        meta: {
          title: 'group',
          icon: 'icon-guanliyuan'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
