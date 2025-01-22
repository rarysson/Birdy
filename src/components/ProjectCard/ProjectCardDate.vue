<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const props = defineProps<{
  icon: 'begin' | 'end'
  date: string
}>()

const iconURL = computed(() => {
  const iconName = props.icon === 'begin' ? 'calendar-day' : 'calendar-check'
  const url = new URL(`../../assets/icons/${iconName}.svg`, import.meta.url)

  return url.href
})

const projectDate = computed(() =>
  format(new Date(props.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
)
</script>

<template>
  <div class="flex gap-4">
    <img :src="iconURL" alt="calendar" />
    <p class="text-zinc-500">{{ projectDate }}</p>
  </div>
</template>
