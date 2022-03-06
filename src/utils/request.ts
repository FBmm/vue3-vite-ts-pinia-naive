import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HttpRequestConfig extends AxiosRequestConfig {}

interface HttpResponse extends AxiosResponse {}

const service = axios.create({})

service.interceptors.request.use(
  (config: HttpRequestConfig) => {
    return config
  },
  (error: any) => {},
)

service.interceptors.response.use(
  (response: HttpResponse) => {
    const res = response.data
    if (res.code !== 0) {
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error: any) => {},
)

export default service
