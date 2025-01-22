<script setup lang="ts">
import BirdyButton from './BirdyButton.vue'
</script>

<template>
  <Teleport to="body">
    <div class="fixed w-screen h-screen top-0 flex items-center justify-center bg-zinc-900/90">
      <div class="w-full max-w-[582px] relative bg-white rounded-lg p-8 text-center">
        <div
          class="absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2 w-16 h-16 rounded-full bg-birdy-300 flex justify-center items-center"
        >
          <img class="filter-to-white" src="@/assets/icons/trash.svg" alt="trash" />
        </div>

        <p class="text-birdy-500 text-xl font-semibold mt-4">Remover projeto</p>

        <hr class="mt-6 mb-8 border-[#8c8b93]" />

        <p class="text-zinc-500">Essa ação removerá definitivamente o projeto:</p>

        <p class="text-2xl mt-4 font-medium">Nome do projeto</p>

        <div class="flex gap-8 justify-center mt-8">
          <BirdyButton type="secondary">Cancelar</BirdyButton>
          <BirdyButton>Confirmar</BirdyButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.filter-to-white {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7474%) hue-rotate(37deg)
    brightness(109%) contrast(101%);
}
</style>
