<script setup lang="ts">
const props = defineProps<{
  id?: string
  danger?: boolean
}>()

const model = defineModel()
</script>

<template>
  <input
    class="border border-zinc-500 rounded-lg h-10 px-4 py-2"
    :class="{ 'border-danger-500 text-danger-500': props.danger }"
    type="text"
    :id="props.id"
    v-model="model"
  />
</template>
