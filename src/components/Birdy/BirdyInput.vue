<script setup lang="ts">
import { useId } from 'vue'
import BirdyInputDate from './inputs/BirdyInputDate.vue'
import BirdyInputFile from './inputs/BirdyInputFile.vue'
import BirdyInputText from './inputs/BirdyInputText.vue'

const props = defineProps<{
  type: 'text' | 'date' | 'file'
  label: string
  required?: boolean
  icon?: 'calendar-day' | 'calendar-check'
  erros?: string[]
}>()

const model = defineModel({ default: '' })

const componentID = useId()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex gap-2 items-center">
      <label
        class="text-birdy-300 text-lg"
        :class="{ 'text-danger-900': !!props.erros }"
        :for="componentID"
        >{{ props.label }}</label
      >
      <p
        v-if="props.required"
        class="text-sm text-zinc-500"
        :class="{ 'text-danger-500': !!props.erros }"
      >
        (Obrigatório)
      </p>
    </div>

    <BirdyInputText
      v-if="props.type === 'text'"
      :id="componentID"
      :danger="!!props.erros"
      v-model="model"
    />
    <BirdyInputDate
      v-if="props.type === 'date' && props.icon"
      :danger="!!props.erros"
      :id="componentID"
      :icon="props.icon"
      v-model="model"
    />
    <BirdyInputFile v-if="props.type === 'file'" :id="componentID" v-model="model" />

    <div v-if="props.erros" class="flex flex-col gap1">
      <p v-for="(error, i) in props.erros" :key="i" class="text-danger-500 text-sm">
        {{ error }}
      </p>
    </div>
  </div>
</template>
