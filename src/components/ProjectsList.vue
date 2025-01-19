<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from './ProjectCard/ProjectCard.vue'
import BirdyButton from './BirdyButton.vue'

const viewMode = ref<'empty' | 'grid'>('grid')
</script>

<template>
  <main
    v-if="viewMode === 'empty'"
    class="bg-white flex flex-col justify-center items-center rounded-md"
  >
    <p class="text-birdy-500 text-2xl font-semibold">Nenhum projeto</p>

    <p class="mt-6 text-zinc-500">Clique no botão abaixo para criar o primeiro e gerenciá-lo.</p>

    <BirdyButton class="mt-8" icon="plus-circle">Novo projeto</BirdyButton>
  </main>
  <main v-else>
    <ProjectCard />
  </main>
</template>
