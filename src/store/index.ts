import { createStore } from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
// import user from './modules/user'
// import asyncRouter from './modules/asyncRouter'

export default createStore({
  state: {
    taskList: [],
    selectedKeys: [],
    routingPathData: [],
    menuList:[
    ] 
  },
  getters,
  mutations,
  actions,
  // modules: {
  //   user,
  //   asyncRouter
  // }
})
