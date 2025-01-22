<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  id?: string
  icon: 'calendar-day' | 'calendar-check'
  modelValue: string
  danger?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const input = ref('')

const iconURL = computed(() => {
  const url = new URL(`../../../assets/icons/${props.icon}.svg`, import.meta.url)

  return url.href
})

function handleTextInput(event: Event) {
  const e = event as InputEvent
  const htmlElement = e.target as HTMLInputElement
  const formatDate = (date: string) => {
    if (date.length > 2 && date.length < 5) {
      // xxx => xx/x
      return `${date.slice(0, 2)}/${date.slice(2)}`
    }

    if (date.length >= 5) {
      // xx/xxx => xx/xx/x
      return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 8)}`
    }

    return date
  }

  input.value = formatDate(htmlElement.value.replace(/\D/g, ''))
  htmlElement.value = input.value
}

watch(input, (value) => {
  if (value.length === 10 || !value.length) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="relative">
    <input
      class="w-full border border-zinc-500 rounded-lg h-10 px-4 py-2 pr-8"
      :class="{ 'border-danger-500 text-danger-500': props.danger }"
      type="text"
      :id="props.id"
      :value="input"
      @input="handleTextInput"
    />

    <img
      class="absolute bottom-1/4 right-2"
      :class="{
        'danger-icon': props.danger,
      }"
      :src="iconURL"
      alt="icon"
      width="24"
      height="24"
    />
  </div>
</template>

<style scoped>
.danger-icon {
  filter: brightness(0) saturate(100%) invert(13%) sepia(73%) saturate(5375%) hue-rotate(2deg)
    brightness(85%) contrast(122%);
}
</style>
