<script setup lang="ts">
import BirdyButton from '@/components/Birdy/BirdyButton.vue'
import BirdyInput from '@/components/Birdy/BirdyInput.vue'
import { isAfter, isValid } from 'date-fns'
import { watch, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '../db'

const FIELD_REQUIRED = 'Campo obrigatório'

const router = useRouter()

const project = reactive({
  name: '',
  client: '',
  beginDate: '',
  endDate: '',
  file: '',
})

const erros = reactive({
  name: [] as string[],
  client: [] as string[],
  beginDate: [] as string[],
  endDate: [] as string[],
})

const submitDisabled = computed(
  () =>
    !project.name ||
    !!erros.name.length ||
    !project.client ||
    !!erros.client.length ||
    !project.beginDate ||
    !!erros.beginDate.length ||
    !project.endDate ||
    !!erros.endDate.length,
)

async function handleSubmit() {
  if (!submitDisabled.value) {
    try {
      await db.projects.add({
        name: project.name.trim(),
        client: project.client.trim(),
        beginDate: project.beginDate,
        endDate: project.endDate,
        file: project.file,
      })

      router.push('/')
    } catch (error) {
      console.error(`Failed to add ${project.name}: ${error}`)
    }
  }
}

watch(
  () => project.name,
  (value) => {
    erros.name = []

    if (!value) {
      erros.name.push(FIELD_REQUIRED)
    } else if (!value.trim().includes(' ')) {
      erros.name.push('Por favor, digite ao menos duas palavras')
    }
  },
)

watch(
  () => project.client,
  (value) => {
    erros.client = []

    if (!value) {
      erros.client.push(FIELD_REQUIRED)
    }
  },
)

watch(
  () => project.beginDate,
  (value) => {
    erros.beginDate = []

    if (!value) {
      erros.beginDate.push(FIELD_REQUIRED)
    } else if (!isValid(new Date(value))) {
      erros.beginDate.push('Selecione uma data válida')
    }
  },
)

watch(
  () => project.endDate,
  (value) => {
    erros.endDate = []

    if (!value) {
      erros.endDate.push(FIELD_REQUIRED)
    } else if (!isValid(new Date(value))) {
      erros.endDate.push('Selecione uma data válida')
    } else if (
      isValid(new Date(project.beginDate)) &&
      isAfter(new Date(project.beginDate), new Date(project.endDate))
    ) {
      erros.endDate.push('A data final não pode ser anterior à data inicial')
    }
  },
)
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
      <form class="w-full max-w-[700px] flex flex-col gap-8" @submit.prevent="handleSubmit">
        <BirdyInput
          type="text"
          label="Nome do projeto"
          required
          v-model="project.name"
          :erros="erros.name"
        />

        <BirdyInput
          type="text"
          label="Cliente"
          required
          v-model="project.client"
          :erros="erros.client"
        />

        <div class="flex gap-10">
          <BirdyInput
            class="w-full"
            type="date"
            label="Data de Início"
            icon="calendar-day"
            required
            v-model="project.beginDate"
            :erros="erros.beginDate"
          />
          <BirdyInput
            class="w-full"
            type="date"
            label="Data Final"
            icon="calendar-check"
            required
            v-model="project.endDate"
            :erros="erros.endDate"
          />
        </div>

        <BirdyInput type="file" label="file" required v-model="project.file" />

        <BirdyButton class="py-4" size="full" :disabled="submitDisabled" kind="submit">
          Salvar projeto
        </BirdyButton>
      </form>
    </div>
  </main>
</template>
