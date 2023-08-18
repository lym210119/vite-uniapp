<script setup lang="ts">
import { useUserStore } from '@/store/user'

const user = useUserStore()

// 设置用户信息
const data = { userName: 'snail' }
user.setUserInfo(data)
// 打印用户信息
console.log(user.userInfo)

function go() {
  uni.navigateTo({
    url: '/pages/about',
  })
}
</script>

<template>
  <view>123</view>
</template>

<style></style>
