/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
