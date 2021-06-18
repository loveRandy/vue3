import request from '@/utils/axios'
import { AxiosRequestConfig }from 'axios'

export const getRoleList = () => {
    const obj:AxiosRequestConfig = {
        url:'/user/info',
        method:'get'
    }
  return request(obj)
}

export const doLogin = (data:any) => {
    const obj:AxiosRequestConfig = {
        url:'/user/login',
        method:'post',
        data
    }
  return request(obj)
}
