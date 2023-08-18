import un, { type UnData } from '@uni-helper/uni-network'

const instance = un.create({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

interface ResponseData extends Record<string, unknown> {
  code: number
  msg: string
}

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    const responseData = response.data as ResponseData | undefined
    if (responseData && responseData.code !== 200) {
      uni.showToast({
        title: responseData.msg,
      })
      return Promise.reject(new Error(responseData.msg))
    }
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
