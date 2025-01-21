<script setup lang="ts">
import BirdyButton from '@/components/Birdy/BirdyButton.vue'
import BirdyInput from '@/components/Birdy/BirdyInput.vue'
import { reactive } from 'vue'

const project = reactive({
  name: '',
  client: '',
  beginDate: '',
  endDate: '',
  file: '',
})
</script>

<template>
  <main class="px-10 py-16">
    <RouterLink to="/">
      <BirdyButton class="text-birdy-300 w-fit h-fit gap-2" icon="arrow-left" type="transparent">
        Voltar
      </BirdyButton>
    </RouterLink>

    <h1 class="font-semibold text-birdy-500 text-2xl mt-2">Novo projeto</h1>

    <div class="flex justify-center border border-[#dcdcdc] rounded-lg py-14 px-8 mt-8">
      <form class="w-full max-w-[700px] flex flex-col gap-8" @submit.prevent="">
        <BirdyInput type="text" label="Nome do projeto" required v-model="project.name" />

        <BirdyInput type="text" label="Cliente" required v-model="project.client" />

        <div class="flex gap-10">
          <BirdyInput
            class="w-full"
            type="date"
            label="Data de Início"
            icon="calendar-day"
            required
            v-model="project.beginDate"
          />
          <BirdyInput
            class="w-full"
            type="date"
            label="Data Final"
            icon="calendar-check"
            required
            v-model="project.endDate"
          />
        </div>

        <BirdyInput type="file" label="file" required v-model="project.file" />

        <BirdyButton class="py-4" size="full" disabled>Salvar projeto</BirdyButton>
      </form>
    </div>
  </main>
</template>
