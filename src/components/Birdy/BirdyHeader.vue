<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProjectSearch from '../ProjectSearch.vue'
import { useSearches } from '@/stores/searches'
import BirdyLogo from './BirdyLogo.vue'

const route = useRoute()
const searches = useSearches()
</script>

<template>
  <header
    v-if="route.name !== 'Search'"
    class="bg-birdy-900 flex text-center justify-between items-center px-16 py-2"
  >
    <div><!-- empty space --></div>

    <BirdyLogo />

    <ProjectSearch v-if="route.name !== 'Project'" />
    <div v-else><!-- empty space --></div>
  </header>
  <header v-else class="drop-shadow-md bg-white flex text-center justify-between items-center p-8">
    <form class="flex items-center gap-6 w-full" @submit.prevent="">
      <label for="search">
        <img
          src="@/assets/icons/search.svg"
          class="filter-purple cursor-pointer"
          alt="search"
          width="20"
          height="20"
        />
      </label>
      <input class="w-full" id="search" type="text" v-model="searches.searchTerm" />
    </form>
  </header>
</template>

<style scoped>
.filter-purple {
  filter: brightness(0) saturate(100%) invert(36%) sepia(10%) saturate(5426%) hue-rotate(214deg)
    brightness(103%) contrast(85%);
}
</style>
