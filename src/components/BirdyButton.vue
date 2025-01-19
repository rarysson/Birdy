<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    icon:
      | 'bird'
      | 'calendar-check-light'
      | 'calendar-day-light'
      | 'dots'
      | 'plus-circle'
      | 'search'
      | 'star-full'
      | 'star'
    type?: 'primary' | 'secondary' | 'transparent'
    size?: 'xs' | 'sm' | 'md' | 'full'
  }>(),
  {
    type: 'primary',
    size: 'md',
  },
)

const emit = defineEmits(['click'])

const iconURL = computed(() => {
  const url = new URL(`../assets/icons/${props.icon}.svg`, import.meta.url)

  return url.href
})
</script>

<template>
  <button
    class="rounded-full flex gap-4 items-center justify-center"
    :class="{
      'text-white bg-birdy-300': props.type === 'primary',
      'text-birdy-300 bg-white border-birdy-300': props.type === 'secondary',
      'min-w-8 h-8': props.size === 'xs',
      'w-[184px] h-10': props.size === 'sm',
      'w-[230px] h-[50px]': props.size === 'md',
      'w-full': props.size === 'full',
    }"
    @click="emit('click')"
  >
    <img :src="iconURL" alt="icon" class="w-5 h-5" />
    <slot />
  </button>
</template>
