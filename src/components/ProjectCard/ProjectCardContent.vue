<script setup lang="ts">
import BirdyButton from '../BirdyButton.vue'
</script>

<template>
  <div class="h-[232px] relative">
    <img src="@/assets/images/project.png" alt="background" />

    <div class="absolute bottom-4 right-4 flex items-center gap-4">
      <BirdyButton class="w-[90%] h-[90%]" icon="star" type="transparent" size="xs" />
      <BirdyButton icon="dots" type="secondary" size="xs" />
    </div>
  </div>
</template>
