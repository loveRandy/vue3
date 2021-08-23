import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getLocal } from '@/utils'
import { message } from 'ant-design-vue'

const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api'
//创建axios实例
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true, // 选项表明了是否是跨域请求
  validateStatus (status: number) {
    switch (status) {
      case 400:
        message.error('请求出错')
        break
      case 401:
        message.warning('授权失败，请重新登录')
        localStorage.removeItem('token')
        
        // store.commit('LOGIN_OUT')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        break
      case 403:
        message.warning({
          message: '拒绝访问'
        })
        break
      case 404:
        message.warning({
          message: '请求错误,未找到该资源'
        })
        break
      case 500:
        message.warning({
          message: '服务端错误'
        })
        break
    }
    return status >= 200 && status < 300
  }
})

//请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求头添加token
    const token = getLocal('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    const flag =
      (config.data && config.data.loading !== false) ||
      (config.params && config.params.loading !== false)
    if (flag) {
      let loading: any = undefined
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    return config
  },
  (err: any) => {
    console.log('请求失败')
    return Promise.reject(err)
  }
)

//响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    const ele: any = document.getElementById('ajaxLoading')
    ele.style.display = 'none'
    switch (res.code) {
      case 1:
        return res
      case 401:
        // message.warning({
        //   message: '授权失败，请重新登录'
        // })
        message.error(res.message)
        return Promise.reject('error')
      default:
        message.error(res.message)
        return Promise.reject('error')
    }
  },
  (error: { message: any }) => {
    const ele: any = document.getElementById('ajaxLoading')
    ele.style.display = 'none'
    console.log(error.message)
    return Promise.reject(error)
  }
)
export default service
