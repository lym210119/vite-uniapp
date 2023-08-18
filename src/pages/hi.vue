<script lang="ts" setup>
import { wxLogin } from '@/api/user'

const { value: name } = useQuery('name')

/**
     * @description 微信登录
     */
async function onWxLogin() {
  uni.login({
    provider: 'weixin',
    success: (loginRes) => {
      state.wxInfo = loginRes
      const jsCode = loginRes.code
      wxLogin({ jsCode }).then((res) => {
        const { openId } = res.data
        user.setUserInfo({ openId })
      })
    },
  })
}
</script>

<template>
  <view>{{ name }}</view>
  <uni-badge text="1" />
  <Counter />

  <view>about</view>
</template>

<route lang="json">
{
  "layout": "home"
}
</route>
