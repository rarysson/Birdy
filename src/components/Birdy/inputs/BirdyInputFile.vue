<script setup lang="ts">
import { ref, watch } from 'vue'
import BirdyButton from '../BirdyButton.vue'

const props = defineProps<{
  id?: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const file = ref(props.modelValue)

function handleDragover(event: DragEvent) {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'copy'
  }
}

function handleDrop(event: DragEvent) {
  if (event.dataTransfer) {
    readFile(event.dataTransfer.files[0])
  }
}

function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement

  if (target.files) {
    readFile(target.files[0])
  }
}

function handleDeleteFile() {
  file.value = ''
}

function readFile(f: File) {
  const reader = new FileReader()

  reader.onload = (event) => {
    if (event.target && event.target.result) {
      file.value = event.target.result as string
    }
  }

  reader.readAsDataURL(f)
}

watch(file, (value) => {
  emit('update:modelValue', value)
})
</script>

<template>
  <template v-if="!file">
    <div
      class="flex flex-col items-center border border-zinc-500 border-dashed rounded p-6"
      @dragover.prevent="handleDragover"
      @drop.prevent="handleDrop"
    >
      <img src="@/assets/icons/upload.svg" alt="upload" />

      <p class="mt-4 mb-6 text-zinc-500">Escolha uma imagem .jpg ou .png no seu dispositivo</p>

      <BirdyButton type="secondary" size="sm">
        <label class="w-full h-full cursor-pointer pt-1.5" :for="props.id">Selecionar</label>
      </BirdyButton>
    </div>

    <input
      class="absolute -z-10 invisible"
      type="file"
      :id="props.id"
      accept="image/png, image/jpeg"
      @change="uploadFile"
    />
  </template>
  <div v-else class="w-full h-96 relative overflow-hidden rounded-lg">
    <img :src="file" alt="image" />

    <BirdyButton
      class="absolute top-6 right-6 drop-shadow-md"
      type="secondary"
      icon="trash"
      size="xs"
      @click="handleDeleteFile"
    />
  </div>
</template>
