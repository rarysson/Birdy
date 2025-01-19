<script setup lang="ts">
import ProjectCardDate from './ProjectCardDate.vue'
</script>

<template>
  <section class="h-[200px] p-6">
    <h1 class="text-birdy-500 text-xl font-bold">Projeto 01</h1>

    <p class="text-zinc-500">
      <span class="font-bold">Cliente:</span>
      Clicksign
    </p>

    <hr class="my-4" />

    <ProjectCardDate class="mb-4" icon="begin" date="2024-01-01" />
    <ProjectCardDate icon="end" date="2024-02-02" />
  </section>
</template>
