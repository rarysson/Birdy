<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import BirdyButton from '../Birdy/BirdyButton.vue'

const optionsVisible = ref(false)
const optionsHTMLRef = ref(null)

onClickOutside(optionsHTMLRef, () => (optionsVisible.value = false))
</script>

<template>
  <div class="h-[232px] relative">
    <img src="@/assets/images/project.png" alt="background" />

    <div class="absolute bottom-4 right-4 flex items-center gap-4">
      <BirdyButton class="w-[90%] h-[90%]" icon="star" type="transparent" size="xs" />

      <div class="relative" ref="optionsHTMLRef">
        <BirdyButton
          icon="dots"
          type="secondary"
          size="xs"
          @click="optionsVisible = !optionsVisible"
        />

        <ul
          class="absolute z-10 bg-white w-60 right-0 rounded-lg overflow-hidden drop-shadow-md"
          :class="{
            invisible: !optionsVisible,
            visible: optionsVisible,
          }"
        >
          <li>
            <button class="px-3.5 py-5 flex text-birdy-300 gap-3">
              <img src="@/assets/icons/edit.svg" alt="edit" />
              Editar
            </button>
          </li>
          <hr />
          <li>
            <button class="px-3.5 py-5 flex text-birdy-300 gap-3">
              <img src="@/assets/icons/trash.svg" alt="trash" />
              Remover
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
