<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => {
      return ['mini', 'default'].includes(value)
    },
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'default'].includes(value)
    },
  },
  plain: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['click'])
const buttonClasses = computed(() => {
  return [
    'weui-btn',
    {
      'wechat-button-small': props.size === 'small',
      'wechat-button-large': props.size === 'large',
      'wechat-button-primary': props.type === 'primary',
      'wechat-button-default': props.type === 'default',
      'wechat-button-plain': props.plain,
      'wechat-button-disabled': props.disabled,
    },
  ]
})
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <view v-if="loading" class="i-tabler-loader mr-2 animate-spin" />
    <slot />
  </button>
</template>

<style scoped>
button.weui-btn,
input.weui-btn {
  --at-apply: border-0;
  outline: 0;
  -webkit-appearance: none;
}
button.weui-btn:focus,
input.weui-btn:focus {
  outline: 0;
}
button.weui-btn_inline,
button.weui-btn_mini,
input.weui-btn_inline,
input.weui-btn_mini {
  @apply w-auto;
}

/* 根据微信风格自定义按钮样式 */
.wechat-button {
  --at-apply: 'inline-flex items-center justify-center px-4 py-2 rounded-md border';
}

/* 根据微信风格自定义小号按钮样式 */
.wechat-button-small {
  --at-apply: 'text-sm'
}

/* 根据微信风格自定义大号按钮样式 */
.wechat-button-large {
  --at-apply: 'text-lg'
}

/* 根据微信风格自定义主要按钮样式 */
.wechat-button-primary {
  --at-apply: 'bg-green-500 text-white border-green-500'
}

/* 根据微信风格自定义默认按钮样式 */
.wechat-button-default {
  --at-apply: 'bg-gray-200 text-gray-800 border-gray-200'
}

/* 根据微信风格自定义镂空按钮样式 */
.wechat-button-plain {
  --at-apply: 'bg-transparent'
}

/* 根据微信风格自定义禁用按钮样式 */
.wechat-button-disabled {
  --at-apply: 'opacity-50 cursor-not-allowed'
}
</style>
