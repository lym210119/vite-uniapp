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
    setUserInfo(data: any) {
      this.userInfo = data
    },
  },
  unistorage: true, // 开启后对 state 的数据读写都将持久化
})
