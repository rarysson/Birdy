<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProjectSearch from '../ProjectSearch.vue'
import { useSearches, type Search } from '@/stores/searches'
import BirdyLogo from './BirdyLogo.vue'
import BirdyButton from './BirdyButton.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const route = useRoute()
const searches = useSearches()

const latestSearchesHTMLRef = ref(null)
const latestSearchesVisible = ref(false)

function handleSelectSearch(search: Search) {
  searches.removeSearch(search.id)
  searches.searchTerm = search.term
}

onClickOutside(latestSearchesHTMLRef, () => (latestSearchesVisible.value = false))
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
  <header
    v-else
    class="relative drop-shadow-md bg-white flex text-center justify-between items-center p-8 z-10"
    :class="{
      'rounded-t-2xl border-2 border-b-0 border-birdy-300':
        latestSearchesVisible && searches.latestSearches.length,
    }"
    ref="latestSearchesHTMLRef"
  >
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
      <input
        class="w-full"
        id="search"
        type="text"
        v-model="searches.searchTerm"
        @click.stop="latestSearchesVisible = !latestSearchesVisible"
      />
    </form>

    <ul
      v-show="latestSearchesVisible && searches.latestSearches.length"
      class="absolute -left-[2px] top-full h-fit bg-white w-[calc(100%_+_4px)] rounded-b-2xl border-2 border-t-0 border-birdy-300"
    >
      <li
        v-for="search in searches.latestSearches"
        :key="search.id"
        class="flex border-t border-t-[#f4f2ff] px-6 py-4"
      >
        <button class="w-full flex gap-4 items-center" @click="handleSelectSearch(search)">
          <img src="@/assets/icons/last-search.svg" alt="icon" width="16" height="16" />
          {{ search.term }}
        </button>

        <BirdyButton
          icon="remove"
          type="transparent"
          size="xs"
          @click="searches.removeSearch(search.id)"
        />
      </li>
    </ul>
  </header>
</template>

<style scoped>
.filter-purple {
  filter: brightness(0) saturate(100%) invert(36%) sepia(10%) saturate(5426%) hue-rotate(214deg)
    brightness(103%) contrast(85%);
}
</style>
