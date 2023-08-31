import un from '@uni-helper/uni-network'

const instance = un.create({
  baseUrl: '/api',
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config: { headers: { [x: string]: any } }) => {
    // 在发送请求之前做些什么

    const value = uni.getStorageSync('user')
    const { token } = JSON.parse(value)
    if (token)
      config.headers['SCRM-TOKEN'] = token

    // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
    // const noTokenUrl = ['/wapapi/Manage/msg', '/wapapi/Manage/checkPhone']

    // if (noTokenUrl.includes(config.url))
    //   config.header.noToken = true

    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

interface ResponseData extends Record<string, unknown> {
  code: number
  msg: string
  data: any
}

// 添加响应拦截器
instance.interceptors.response.use(
  (response: { data: ResponseData }) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    const { code, data, msg } = response.data as ResponseData
    if (code === 1001) { // 重新登录
      uni.showToast({
        title: msg,
        icon: 'none',
      }).then(() => {
        uni.reLaunch({
          url: '/pages/login/index',
        })
      })
      return Promise.reject(new Error(msg))
    }
    else if (code === 1002) {
      uni.showToast({
        title: msg,
        icon: 'none',
      })
      return Promise.reject(new Error(msg))
    }
    else if (code === 0) {
      uni.showToast({
        title: msg,
        icon: 'none',
      })
      return Promise.reject(new Error(msg))
    }
    else {
      return data
    }
  },
  (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
