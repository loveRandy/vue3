import { CHANGEROUTE } from './mutation-types'
import { asyncRoutes, constantRoutes } from '@/router'
import { recursionRouter } from '@/utils/recursion-router'
export default {
  // 存储路由路径
  // addRoutingPathData ({ commit }: any, params: any) {
  //   commit(ADDROUTINGPATHDATA, { params })
  // },

  // 改变路由
  changeAsyncRoute ({ commit }: any) {
    return new Promise(resolve => {
      const userRouter: any[] = ['Error','Error403','Error404','echart', 'Bar', 'Line']
      const data = recursionRouter(userRouter, asyncRoutes)
      const menu = [...constantRoutes, ...data]
      commit(CHANGEROUTE, menu)
      resolve(data)
    })
  }
}
