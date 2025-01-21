<script setup lang="ts">
import { useRoute } from 'vue-router'

import BirdyLogo from './BirdyLogo.vue'
import ProjectSearch from '../ProjectSearch.vue'

const route = useRoute()
</script>

<template>
  <header class="bg-birdy-900 flex text-center justify-between px-16 py-2">
    <div><!-- empty space --></div>

    <BirdyLogo />

    <ProjectSearch v-if="route.name !== 'Project'" />
    <div v-else><!-- empty space --></div>
  </header>
</template>
