import { http } from '@/utils/http'

/**
 * 验证手机号是否存在锦鲤
 * @param phone 手机号
 * @returns
 */
export function checkPhone(phone: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Manage/checkPhone',
    data: {
      phone,
    },
  })
}

/**
 * 发送验证码
 * @param phone 手机号
 * @returns
 */
export function getVerifyCode(phone: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Manage/msg',
    data: {
      phone,
    },
  })
}

/**
 * 验证码登录
 * @param phone 手机号
 * @param vercode 验证码
 * @param deviceId 手机设备号
 * @returns
 */
export function login(phone: string, vercode: string, deviceId: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Manage/Check',
    data: {
      phone,
      vercode,
      deviceId,
    },
  })
}

/**
 * 密码登录
 * @param phone 手机号
 * @param password 密码
 * @param deviceId 手机设备号
 * @returns
 */
export function pswLogin(phone: string, password: string, deviceId: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Manage/pswLogin',
    data: {
      phone,
      password,
      deviceId,
    },
  })
}

/**
 * 重置密码
 * @param phone 手机号
 * @param password 新密码
 * @param vercode 验证码
 * @returns
 */
export function editPsw(phone: string, password: string, vercode: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Manage/editPsw',
    data: {
      phone,
      password,
      vercode,
    },
  })
}

/**
 * 扫码授权登录
 * @params code 扫码获取的授权码
 */
export function scanLogin(code: string) {
  return http({
    method: 'POST',
    url: '/wapapi/Index/setLoginCode',
    data: {
      code,
    },
  })
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return http({
    method: 'POST',
    url: '/wapapi/Staff/getStaffRow',
  })
}
