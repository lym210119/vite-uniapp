<script setup lang="ts">
import { useUserStore } from '@/store/user'

const { setUserInfo } = useUserStore()

function handleLogout() {
  uni.showModal({
    title: '提示',
    content: '确定要退出锦蚁云商APP吗?',
    success: (res) => {
      if (res.confirm) {
        // logout({}).then(() => {
        //   setUserInfo({})
        uni.removeStorageSync('user')
        uni.reLaunch({
          url: '/pages/login/index',
        })
        // })
      }
    },
  })
}
</script>

<template>
  <view @click="handleLogout">
    退出
  </view>
  <view class="dark:bg-red:10">
    213232323
  </view>
  <button>dark mode</button>
</template>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "我的"
  }
}
</route>
