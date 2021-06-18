import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import EmptyLayout from '@/views/empty_layout/index.vue'
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
    path: '/product',
    component: Layout,
    name: 'product-manage',
    redirect: '/product/list',
    meta: {
      title: '产品管理',
      icon: 'icon-searchcart'
    },
    children: [
      {
        path: '/product/list',
        name: 'product-list',
        component: () => import('@/views/product/list/index.vue'),
        meta: {
          title: '产品列表',
          icon: 'icon-raw'
        }
      },
      {
        path: '/product/category',
        name: 'review-manage',
        component: () => import('@/views/product/category/index.vue'),
        meta: {
          title: '产品分类',
          icon: 'icon-share'
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: 'order-manage',
    redirect: '/order/list',
    meta: {
      title: '订单管理',
      icon: 'icon-cart-Empty'
    },
    children: [
      {
        path: '/order/list',
        name: 'order-list',
        component: () => import('@/views/order/list/index.vue'),
        meta: {
          title: '订单列表',
          icon: 'icon-Exportservices'
        }
      },
      {
        path: '/order/returnGoods',
        name: 'return-goods',
        component: () => import('@/views/order/return_goods/index.vue'),
        meta: {
          title: '退货管理',
          icon: 'icon-column'
        }
      },
      {
        path: '/order/product',
        component: EmptyLayout,
        name: 'goods',
        redirect: '/order/good/list',
        meta: {
          title: '货物管理',
          icon: 'icon-searchcart'
        },
        children: [
          {
            path: '/order/good/list',
            name: 'goods-list',
            component: () => import('@/views/order/good/list/index.vue'),
            meta: {
              title: '货物列表',
              icon: 'icon-apparel'
            }
          },
          {
            path: '/order/good/check',
            name: 'goods-classify',
            component: () => import('@/views/order/good/check/index.vue'),
            meta: {
              title: '退货管理',
              icon: 'icon-add-account'
            }
          },
        ]
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    name: 'permission',
    redirect: '/permission/user',
    meta: {
      title: '产品管理',
      icon: 'icon-cecurity-protection'
    },
    children: [
      {
        path: '/permission/user',
        name: 'user-manage',
        component: () => import('@/views/permission/user_manage/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'icon-confirm'
        }
      },
      {
        path: '/permission/role',
        name: 'role-manage',
        component: () => import('@/views/permission/role_manage/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'icon-Customermanagement'
        }
      },
      {
        path: '/permission/menu',
        name: 'menu-manage',
        component: () => import('@/views/permission/menu_manage/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'icon-earth'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
