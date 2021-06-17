/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

export function recursionRouter (
  userRouter: any[] = [],
  allRouter: any[] = []
): Array<any> {
  const realRoutes = allRouter
    .filter(item => userRouter.includes(item.name))
    .map(item => ({
      ...item,
      children: item.children
        ? recursionRouter(userRouter, item.children)
        : null
    }))
  return realRoutes
}

//设置单层侧边栏
export function setSingleItem (list: any[], newList: any[]) {
  newList = list.map(item => {
    if (item.children && item.children.length > 0) {
      if (item.meta && item.meta.single) {
        item = { ...item }
        item.children = null
      } else {
        item.children = setSingleItem(item.children, newList)
      }

      return item
    }
    return item
  })
  return newList
}
