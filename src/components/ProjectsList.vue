<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from './ProjectCard/ProjectCard.vue'
import BirdyButton from './Birdy/BirdyButton.vue'
import BirdyToggle from './Birdy/BirdyToggle.vue'
import BirdyDropdown from './Birdy/BirdyDropdown.vue'

const viewMode = ref<'empty' | 'grid'>('grid')
const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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
    <div class="mb-6 flex justify-between items-center">
      <p class="text-birdy-300">
        <span class="font-semibold text-2xl text-birdy-500">Projetos</span>
        ({{ projects.length }})
      </p>

      <div class="flex gap-8">
        <BirdyToggle>Apenas Favoritos</BirdyToggle>

        <BirdyDropdown>Ordem alfabetica</BirdyDropdown>

        <BirdyButton icon="plus-circle" size="sm">Novo projeto</BirdyButton>
      </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(346px,1fr))] gap-8">
      <ProjectCard v-for="p in projects" :key="p" />
    </div>
  </main>
</template>
