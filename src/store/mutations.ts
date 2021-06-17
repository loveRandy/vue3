import {
  ADDROUTINGPATHDATA,
  CHANGEACTIVEKEYS,
  CHANGEROUTE
} from './mutation-types'
import { setSingleItem } from '@/utils/recursion-router'
export default {
  // 路由路径
  [ADDROUTINGPATHDATA] (state: any, paramsData: any) {
    // 判断RoutingPathData内是否存在新的路由不存在则插入
    let flag = true
    for (let i = 0; i < state.routingPathData.length; i++) {
      if (state.routingPathData[i].path == paramsData.path) {
        flag = false
        break
      }
    }
    if (flag) {
      state.routingPathData.push(paramsData)
    }
  },
  [CHANGEACTIVEKEYS] (state: any, paramsData: any) {
    state.selectedKeys = paramsData
  },
  [CHANGEROUTE] (state: any, paramsData: any) {
    const allRouterList = paramsData.filter(
      (item: { hidden: any }) => !item.hidden
    )
    state.menuList = setSingleItem(allRouterList, [])
  }
}
