import { CHANGEROUTE } from './mutation-types'
import { asyncRoutes, constantRoutes } from '@/router'
import { recursionRouter ,setSingleItem} from '@/utils/recursion-router'
import { getRoleList } from '@/api'
export default {
  // 改变路由
  async changeAsyncRoute ({ commit }: any) {
    const res = await getRoleList()
    if (res.code === 1) {
      const userRouter: any[] = res.data.data
      const data = recursionRouter(userRouter, asyncRoutes)
      const menu = [...constantRoutes, ...data]

      const allRouterList = menu.filter(
        (item: { hidden: any }) => !item.hidden
      )
      //设置一下当前的menuList
      const currentMenu = setSingleItem(allRouterList, [])
      commit(CHANGEROUTE, currentMenu)
      return data
    }
  }
}
