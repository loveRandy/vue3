const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token'),
    avatar: '',
    username: '',
    roles: [],
    menus: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    /* login */
    LoginResult ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Login(userInfo)
          .then(response => {
            const { code, token } = response.data
            if (code == 200) {
              localStorage.setItem('token', token)
              commit('SET_TOKEN', token)
            }
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    /* 用户登出 */
    LogoutResult ({ commit }) {
      localStorage.removeItem('token')
    }
  }
}

export default user
