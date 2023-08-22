<script setup lang="ts">
const props = defineProps({
  name: String,
  size: Number,
  color: String,
})

const svgData = import(`../assets/svg/${props.name}.svg`)
</script>

<template>
  <text :style="{ backgroundImage: svgData }" />
</template>
