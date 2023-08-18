import request from '@/utils/request'

const prefix = '/wapapi'

// 验证手机号是否存在锦鲤
export const checkPhone = (data: any) => request.post(`${prefix}/Manage/checkPhone`, data)
// 短信发送接口
export const getVerifyCode = (data: any) => request.post(`${prefix}/Manage/msg`, data)
// 验证码登录
export const login = (data: { username: string; password: string; vercode: string }) => request.post(`${prefix}/Manage/Check`, data)
// 密码登录
export const pswLogin = (data: any) => request.post(`${prefix}/Manage/pswLogin`, data)
