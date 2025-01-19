<script setup lang="ts">
import { ref } from 'vue'

const dropdownVisible = ref(false)
</script>

<template>
  <div class="relative">
    <div
      class="w-[296px] h-10 p-1 pl-4 flex justify-between items-center bg-white rounded-lg border"
      :class="{
        'rounded-b-none': dropdownVisible,
        'border-zinc-500': !dropdownVisible,
        'border-birdy-300': dropdownVisible,
      }"
      @click="dropdownVisible = !dropdownVisible"
    >
      <slot />

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
      <button class="px-4 py-[18px] bg-white w-full text-left">Ordem alfabetica</button>
      <hr />
      <button class="px-4 py-[18px] bg-white w-full text-left">Iniciados mais recentes</button>
      <hr />
      <button class="px-4 py-[18px] bg-white w-full text-left">Prazo mais proximo</button>
    </div>
  </div>
</template>
