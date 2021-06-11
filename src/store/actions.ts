import { ADDROUTINGPATHDATA } from './mutation-types'
export default {
  // 存储路由路径
  addRoutingPathData ({ commit }: any, params: any) {
    commit(ADDROUTINGPATHDATA, { params })
  }
}
