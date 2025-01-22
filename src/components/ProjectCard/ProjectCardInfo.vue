<script setup lang="ts">
import ProjectCardDate from './ProjectCardDate.vue'
import type { Project } from '@/db'

const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <section class="h-[200px] p-6">
    <h1 class="text-birdy-500 text-xl font-bold">{{ props.project.name }}</h1>

    <p class="text-zinc-500 mt-2">
      <span class="font-bold">Cliente:</span>
      {{ props.project.client }}
    </p>

    <hr class="my-4" />

    <ProjectCardDate class="mb-4" icon="begin" :date="props.project.beginDate" />
    <ProjectCardDate icon="end" :date="props.project.endDate" />
  </section>
</template>
