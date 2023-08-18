<script lang="ts" setup>
defineProps({
  modelValue: String,
  placeholder: String,
})
const emit = defineEmits(['update:modelValue'])
function updateValue(value: any) {
  emit('update:modelValue', value)
}
</script>

<template>
  <view>
    <input class="block border border-slate-300 rounded-md border-solid bg-white px-3 py-2 shadow-sm focus:border-sky-500 sm:text-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500" :placeholder="placeholder" @input="updateValue">
  </view>
</template>
