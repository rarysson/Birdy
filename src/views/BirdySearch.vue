<script setup lang="ts">
import BirdyButton from '@/components/Birdy/BirdyButton.vue'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
import { useSearches } from '@/stores/searches'

const searches = useSearches()
</script>

<template>
  <main class="px-10 py-16">
    <RouterLink to="/">
      <BirdyButton class="text-birdy-300 w-fit h-fit gap-2" icon="arrow-left" type="transparent">
        Voltar
      </BirdyButton>
    </RouterLink>

    <h1 class="font-semibold text-birdy-500 text-2xl mt-2">Resultado da busca</h1>

    <div
      v-show="searches.projects.length"
      class="grid grid-cols-[repeat(auto-fill,minmax(346px,1fr))] gap-8 mt-6"
    >
      <ProjectCard v-for="project in searches.projects" :key="project.id" :project="project" />
    </div>
    <div v-show="!searches.projects.length" class="mt-6">
      <p>Sem resultado...</p>
    </div>
  </main>
</template>
