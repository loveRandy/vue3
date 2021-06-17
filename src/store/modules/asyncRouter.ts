export default {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state:any, routes:any) => {
        state.addRoutes = routes
        // state.routes = constantRoutes.concat(routes)
        state.routes = routes
      }
  },
  getters: {},
  actions: {
    generateRoutes({ commit }:any, roles:any) {
        return new Promise(resolve => {
          const accessedRoutes:any = roles
  
          commit('SET_ROUTES', accessedRoutes)
         
          resolve([])
        })
      }
  }
}
