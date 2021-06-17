export default {
  state: {
    menus: []
  },
  mutations: {
    SET_MENUS: (state: any, menus: any) => {
      state.menus = menus
    }
  },
  getters: {},
  actions: {
    GetInfo ({ commit }: any) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('SET_MENUS', [123])
          resolve([123])
        }, 3000)
      })
    }
  }
}
