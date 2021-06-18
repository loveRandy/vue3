import {
  ADDROUTINGPATHDATA,
  CHANGEACTIVEKEYS,
  CHANGEROUTE
} from './mutation-types'
export default {
  // 路由路径
  [ADDROUTINGPATHDATA] (state: any, list: any) {
    state.routingPathData = list
  },
  [CHANGEACTIVEKEYS] (state: any, paramsData: any) {
    state.selectedKeys = paramsData
  },
  [CHANGEROUTE] (state: any, menuList: any) {
    state.menuList = menuList
  }
}
