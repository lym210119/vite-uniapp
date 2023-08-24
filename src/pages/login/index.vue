<script setup lang="ts">
import { checkPhone, getUserInfo, getVerifyCode, login, pswLogin } from '@/api'
import { useUserStore } from '@/store/user'

const { userInfo, setToken, setUserInfo } = useUserStore()

const loginType = ref('password')
const isAgree = ref(true)
const countdown = ref(60)

const loginForm = reactive({
  phone: '',
  password: '',
  vercode: '',
})

// 计算属性，根据登录类型判断登录按钮是否可用
const loginBtnDisabled = computed(() => {
  if (loginType.value === 'password')
    return !(loginForm.phone && loginForm.password)
  else
    return !(loginForm.phone && loginForm.vercode)
})

// 在组件挂载前执行的生命周期钩子函数
onBeforeMount(() => {
  if (userInfo.uid) {
    uni.switchTab({
      url: '/pages/home/index',
    })
  }
})

// 切换登录类型
function toggleLoginType() {
  loginType.value = loginType.value === 'password' ? 'sms' : 'password'
}

// 切换同意协议状态
function toggleAgree() {
  isAgree.value = !isAgree.value
}

// 发送验证码
function sendVerificationCode() {
  // 防止重复点击发送验证码
  if (countdown.value < 60)
    return

  getVerifyCode({ phone: loginForm.phone }).then(() => {
    const countdownInterval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--
      }
      else {
        countdown.value = 60
        clearInterval(countdownInterval)
      }
    }, 1000)
  })
}

// 处理登录
function handleLogin() {
  if (!isAgree.value) {
    uni.showToast({ title: '请先阅读用户协议和隐私协议并勾选', icon: 'none' })
    return
  }

  // 登录成功回调函数
  function loginSuccess(res: any) {
    const { scrm_token } = res.data
    setToken(scrm_token)
    // 登录后获取用户信息
    getUserInfo().then((userInfo) => {
      setUserInfo(userInfo)
      uni.showToast({ title: '登录成功', icon: 'none' })
      uni.switchTab({
        url: '/pages/home/index',
      })
    })
  }

  // 验证手机号是否存在锦鲤
  checkPhone(loginForm).then(() => {
    const systemInfo = uni.getSystemInfoSync()
    if (loginType.value === 'password')
      pswLogin({ ...loginForm, deviceId: systemInfo.deviceId }).then(loginSuccess)
    else
      login({ ...loginForm, deviceId: systemInfo.deviceId }).then(loginSuccess)
  })
}
</script>

<template>
  <view class="bg-[#f5f5f5]">
    <view class="relative h-[247px] bg-[#597ef7]">
      <image class="absolute right-0 top-0 h-[180px] w-[300px]" src="/static/images/198@2x.png" />
      <view class="absolute bottom-0 left-0 right-0 h-[50px] from-[#537CFA] to-[#F5F5F5] bg-gradient-to-b" />
    </view>

    <view class="relative m-[10px] mt-[-90px] rounded-[16px] bg-white px-[30px] py-[40px]">
      <view class="mb-2">
        <text class="text-2xl font-bold text-gray-800">
          欢迎登录
        </text>
      </view>
      <view class="mb-[50px]">
        <text class="text-sm font-normal text-gray-700">
          锦蚁云商，助力生意增长
        </text>
      </view>

      <view class="mb-[20px] flex items-center justify-center rounded-[50px] bg-[#f5f5f5] px-[20px] py-[14px]">
        <input v-model="loginForm.phone" class="flex-1" type="text" placeholder="请输入手机号/用户名">
      </view>
      <view v-if="loginType === 'password'" class="mb-[20px] flex items-center justify-center rounded-[50px] bg-[#f5f5f5] px-[20px] py-[14px]">
        <input v-model="loginForm.password" class="flex-1" type="password" placeholder="请输入密码">
      </view>
      <view v-if="loginType === 'sms'" class="mb-[20px] flex items-center justify-center rounded-[50px] bg-[#f5f5f5] px-[20px] py-[14px]">
        <input v-model="loginForm.vercode" class="flex-1" type="number" placeholder="请输入验证码">
        <text class="text-xs font-normal text-indigo-500" @click="sendVerificationCode">
          {{ countdown < 60 ? `${countdown} 秒后重新发送` : '发送验证码' }}
        </text>
      </view>

      <view class="h-[44px] flex items-center justify-center rounded-[50px] bg-[#587FF8] text-center text-white" :class="{ 'opacity-40': loginBtnDisabled }" @click="handleLogin">
        登录
      </view>

      <view class="mt-[20px] text-center">
        <text class="text-xs font-normal text-gray-800" @click="toggleLoginType">
          {{ loginType === 'password' ? '短信登录' : '密码登录' }}
        </text>
      </view>

      <view class="mt-[90px] text-center text-xs font-normal text-indigo-500">
        <label class="radio" @click="toggleAgree">
          <radio value="r1" :checked="isAgree" style="transform:scale(0.7)" />
          <text>登录即同意《用户协议》和《隐私协议》</text>
        </label>
      </view>
    </view>

    <view class="pb-[50px] pt-[60px] text-center text-xs font-normal text-gray-600">
      <text class="i-material-symbols:lock-outline" />
      <text class="">
        忘记密码
      </text>
    </view>
  </view>
</template>

<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "登录"
  }
}
</route>
