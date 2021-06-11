import { createStore } from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
// import user from './modules/user'

export default createStore({
  state: {
    taskList: [],
    activeKey: [],
    routingPathData: [],
    menuList:[
      {
        path: '/',
        name: 'layout',
        meta: {
          keepAlive: false,
          title: '我是layout',
          icon:'icon-tuichu'
        },
        children: [
          {
            path: '/index',
            name: 'index',
            meta: {
              keepAlive: false,
              title: '首页',
              icon:'icon-facebook'
            }
          },
          {
            path: '/table',
            name: 'table',
            meta: {
              keepAlive: false,
              title: '表格',
              icon:'icon-facebook'
            }
          },
          {
            path: '/about',
            name: 'About',
            meta: {
              keepAlive: false,
              title: '关于',
              icon:'icon-facebook'
            }
          }
        ],
      }
    ]
  },
  getters,
  mutations,
  actions,
  modules: {
    // user
  }
})
