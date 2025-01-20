<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()

const model = defineModel()
</script>

<template>
  <input
    class="border border-zinc-500 rounded-lg h-10 px-4 py-2"
    type="text"
    :id="props.id"
    v-model="model"
  />
</template>
