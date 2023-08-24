import un from '@uni-helper/uni-network'
import { useUserStore } from '@/store/user'

const { token } = useUserStore()

const instance = un.create({
  baseUrl: '/api',
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    if (token)
      config.headers['SCRM-TOKEN'] = token

    // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
    // const noTokenUrl = ['/wapapi/Manage/msg', '/wapapi/Manage/checkPhone']

    // if (noTokenUrl.includes(config.url))
    //   config.header.noToken = true

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
  data: any
}

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    const res = response.data as ResponseData
    if (res.code === 1001) { // 重新登录
      uni.showToast({
        title: res.msg,
        icon: 'none',
        success: () => {
          uni.reLaunch({
            url: '/pages/login/index',
          })
        },
      })
      return Promise.reject(new Error(res.msg))
    }
    else if (res.code === 1002) {
      uni.showToast({
        title: res.msg,
        icon: 'none',
      })
      return Promise.reject(new Error(res.msg))
    }
    else if (res.code === 0) {
      uni.showToast({
        title: res.msg,
        icon: 'none',
      })
      return Promise.reject(new Error(res.msg))
    }
    else {
      return res
    }
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
