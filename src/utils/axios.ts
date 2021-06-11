import axios from 'axios'
import baseURL from '@/config/baseURL'
import { getLocal } from '@/utils'
// import store from '../store'
import { message } from 'ant-design-vue'

//创建axios实例
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})

//请求拦截
service.interceptors.request.use(
  config => {
    // 请求头添加token
    if (getLocal('authed')) {
      config.headers.Authorization = `Bearer ${getLocal('authed')}`
    }
    const flag =
      (config.data && config.data.loading !== false) ||
      (config.params && config.params.loading !== false)
    if (flag) {
      let loading:any
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    return config
  },
  err => {
    console.log('请求失败')
    return Promise.reject(err)
  }
)

//响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    const ele:any = document.getElementById('ajaxLoading')
    ele.style.display = 'none'
    switch (res.code) {
      case 200:
        return res
      case 401:
        message.error(res.message)
        return Promise.reject('error')
      default:
        message.error(res.message)
        return Promise.reject('error')
    }
  },
  error => {
    const ele:any = document.getElementById('ajaxLoading')
    ele.style.display = 'none'
    message.error(error.message)
    return Promise.reject(error)
  }
)
export default service
