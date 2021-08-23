
const proxyTargetMap = {
  prod: 'http://47.105.71.81:3306',
  randy: 'http://47.105.71.81:3306',
  peter: 'http://192.168.11.178:3001'
}
let proxyTarget = proxyTargetMap[process.env.API_TYPE] || proxyTargetMap.prod
module.exports = {
  publicPath:'./',
  devServer: {
    open: true,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
