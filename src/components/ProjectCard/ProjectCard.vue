<script setup lang="ts">
import type { Project } from '@/db'
import ProjectCardContent from './ProjectCardContent.vue'
import ProjectCardInfo from './ProjectCardInfo.vue'

const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="w-[346px] bg-white rounded-2xl overflow-hidden">
    <ProjectCardContent :project="props.project" />

    <ProjectCardInfo :project="props.project" />
  </article>
</template>
