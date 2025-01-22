<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" v-model="model" />
    <div
      class="relative w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:start-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#ffb23d]"
    ></div>
    <span class="ms-3 text-sm font-medium text-slate-800">
      <slot />
    </span>
  </label>
</template>
