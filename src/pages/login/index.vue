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
  if (userInfo.id) {
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
  function loginSuccess(data: any) {
    const { scrm_token } = data
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
  <view class="login-bg">
    1232
  </view>
</template>

<style scoped>
.login-bg {
  height: 100vh;
  background-image: url('/static/images/login-bg@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "登录"
  }
}
</route>
