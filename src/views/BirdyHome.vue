<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ProjectCard from '../components/ProjectCard/ProjectCard.vue'
import BirdyButton from '../components/Birdy/BirdyButton.vue'
import BirdyToggle from '../components/Birdy/BirdyToggle.vue'
import BirdyDropdown from '../components/Birdy/BirdyDropdown.vue'
import { useProjects } from '@/stores/projects'

const projects = useProjects()

const viewMode = ref<'empty' | 'grid'>('empty')

watchEffect(() => {
  viewMode.value = !projects.projects.length ? 'empty' : 'grid'
})
</script>

<template>
  <main
    v-if="viewMode === 'empty'"
    class="bg-white flex flex-col justify-center items-center rounded-md mx-11 my-16 px-4"
  >
    <p class="text-birdy-500 text-2xl font-semibold">Nenhum projeto</p>

    <p class="mt-6 text-zinc-500 text-center">
      Clique no botão abaixo para criar o primeiro e gerenciá-lo.
    </p>

    <RouterLink to="/project">
      <BirdyButton class="mt-8" icon="plus-circle">Novo projeto</BirdyButton>
    </RouterLink>
  </main>
  <main v-else class="mx-4 lg:mx-11 my-8 lg:my-16">
    <div
      class="mb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0"
    >
      <p class="text-birdy-300">
        <span class="font-semibold text-2xl text-birdy-500">Projetos</span>
        ({{ projects.projects.length }})
      </p>

      <div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <BirdyToggle v-model="projects.onlyFavorites">Apenas Favoritos</BirdyToggle>

        <BirdyDropdown />

        <RouterLink class="w-fit" to="/project">
          <BirdyButton icon="plus-circle" size="sm">Novo projeto</BirdyButton>
        </RouterLink>
      </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(346px,1fr))] gap-8">
      <ProjectCard v-for="project in projects.projects" :key="project.id" :project="project" />
    </div>
  </main>
</template>
