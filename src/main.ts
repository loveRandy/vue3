import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from '@/antd'
import IconFont from '@/components/icon_font'
import './permission'
import '@/styles/index.less'


const app = createApp(App)
const win: any = window //
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}
setupAntd(app)
app.use(store)
app.use(router)
app.component('IconFont', IconFont)
app.mount('#app')
