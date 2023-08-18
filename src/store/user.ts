/**
 * @description 用户信息数据持久化
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
    }
  },
  actions: {
    setUserInfo(data: {}) {
      this.userInfo = data
    },
  },
})
