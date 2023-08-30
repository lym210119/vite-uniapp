<script lang="ts" setup>
defineProps({
  text: String,
})
const emit = defineEmits(['click'])
</script>

<template>
  <button class="action:text-white pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped></style>
