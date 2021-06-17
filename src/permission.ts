import router from '@/router'
import store from './store'


router.beforeEach(async (to) => {
	
  if (to.path === '/login' || to.path === '/404') {
    return true
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
			return {
				name:'login'
			}
    } else {
      if (store.state.menuList.length === 0) {
        //根据接口获取路由信息
        const accessedRoutes = await store.dispatch('changeAsyncRoute', token)

        //动态增加路由
        accessedRoutes.forEach((item: any) => {
          router.addRoute(item)
        })
        router.push({ path: to.path })
				return true
      } else {
        return true
      }
    }
  }
})
