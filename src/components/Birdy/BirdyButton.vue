<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    icon?:
      | 'arrow-left'
      | 'bird'
      | 'calendar-check'
      | 'calendar-day'
      | 'chevron'
      | 'dots'
      | 'edit'
      | 'plus-circle'
      | 'search'
      | 'star-full'
      | 'star'
      | 'trash'
      | 'upload'
    type?: 'primary' | 'secondary' | 'transparent'
    size?: 'xs' | 'sm' | 'md' | 'full'
    disabled?: boolean
    kind?: 'button' | 'submit'
  }>(),
  {
    type: 'primary',
    size: 'md',
    kind: 'button',
  },
)

const emit = defineEmits(['click'])

const iconURL = computed(() => {
  const url = new URL(`../../assets/icons/${props.icon}.svg`, import.meta.url)

  return url.href
})
</script>

<template>
  <button
    :type="props.kind"
    class="rounded-full flex gap-4 items-center justify-center"
    :class="{
      'text-white bg-birdy-300': props.type === 'primary' && !props.disabled,
      'text-white bg-birdy-200': props.type === 'primary' && props.disabled,
      'text-birdy-300 bg-white border border-birdy-300': props.type === 'secondary',
      'min-w-8 h-8': props.size === 'xs',
      'w-[184px] h-10 gap-2': props.size === 'sm',
      'w-[230px] h-[50px]': props.size === 'md',
      'w-full': props.size === 'full',
    }"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <img v-if="props.icon" :src="iconURL" alt="icon" class="w-5 h-5" />
    <slot />
  </button>
</template>
