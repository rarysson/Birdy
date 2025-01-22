<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useProjects, type ProjectSort } from '@/stores/projects'

type Option = {
  sort: ProjectSort
  text: string
}

const projects = useProjects()

const dropdownVisible = ref(false)
const dropdownHTMLRef = ref(null)

const sortOptions = [
  { sort: 'abc', text: 'Ordem alfabética' },
  { sort: 'recent', text: 'Iniciados mais recentes' },
  { sort: 'closest', text: 'Prazo mais próximo' },
] as Option[]

const currentOption = ref<Option>(sortOptions.find((op) => op.sort === projects.sortOrder)!)

function changeOption(index: number) {
  currentOption.value = sortOptions[index]
  projects.sortOrder = currentOption.value.sort
  dropdownVisible.value = false
}

onClickOutside(dropdownHTMLRef, () => (dropdownVisible.value = false))
</script>

<template>
  <div class="relative" ref="dropdownHTMLRef">
    <div
      class="w-[296px] h-10 p-1 pl-4 flex justify-between items-center bg-white rounded-lg border cursor-pointer"
      :class="{
        'rounded-b-none': dropdownVisible,
        'border-zinc-500': !dropdownVisible,
        'border-birdy-300': dropdownVisible,
      }"
      @click="dropdownVisible = !dropdownVisible"
    >
      <p>{{ currentOption.text }}</p>

      <button
        class="w-8 h-8 flex items-center justify-center"
        :class="{ 'rotate-180': dropdownVisible }"
      >
        <img src="@/assets/icons/chevron.svg" alt="icon" width="16" height="16" />
      </button>
    </div>

    <div
      class="w-full absolute border border-birdy-300 z-10 rounded-b-lg overflow-hidden"
      :class="{ visible: dropdownVisible, invisible: !dropdownVisible }"
    >
      <template v-for="(option, i) in sortOptions" :key="i">
        <button class="px-4 py-[18px] bg-white w-full text-left" @click="changeOption(i)">
          {{ option.text }}
        </button>
        <hr v-if="i !== sortOptions.length - 1" />
      </template>
    </div>
  </div>
</template>
