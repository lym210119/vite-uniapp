<script lang="ts" setup>
const { value: name } = useQuery('name')
</script>

<template>
  <div>{{ name }}</div>

  <Counter />
</template>

<route lang="json">
{
  "layout": "home"
}
</route>
