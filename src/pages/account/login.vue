<script setup lang="ts">
import { login } from '@/api/user'
import { useUserStore } from '@/store/user'

const user = useUserStore()

const username = ref('')
const password = ref('')
const vercode = ref('')

function handleLogin() {
  login({ username: username.value, password: password.value, vercode: vercode.value }).then((res) => {
    console.log('res: ', res)
  })
}
</script>

<template>
  <view class="p-3">
    <Input v-model="username" class="mb-3" placeholder="请输入用户名" />
    <Input v-model="password" class="mb-3" placeholder="请输入密码" />
    <Input v-model="vercode" class="mb-3" placeholder="请输入验证码" />
    <button @click="handleLogin">
      登录
    </button>
    <view class="i-logos-vue text-3xl" />

    <Button text="登录" />
  </view>
</template>

<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "登录"
  }
}
</route>
