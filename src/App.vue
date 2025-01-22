<script setup lang="ts">
import BirdyHeader from '@/components/Birdy/BirdyHeader.vue'
import { useProjectsStore } from './stores/projects'

const projectsStore = useProjectsStore()

projectsStore.fillProjects()
</script>

<template>
  <div class="bg-birdy-100 w-screen min-h-screen flex flex-col">
    <BirdyHeader />

    <RouterView class="flex-auto" />
  </div>
</template>
