<script setup lang="ts">
import BirdyHeader from '@/components/BirdyHeader.vue'
</script>

<template>
  <div class="bg-birdy-100 w-screen h-screen flex flex-col">
    <BirdyHeader />

    <RouterView class="flex-auto" />
  </div>
</template>
