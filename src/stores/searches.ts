import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { db, type Project } from '@/db'
import { refDebounced } from '@vueuse/core'

const _projects = ref<Project[]>([])

export const useSearches = defineStore('searches', () => {
  const searchTerm = ref('')
  const _term = refDebounced(searchTerm, 250)

  const projects = computed(() => {
    if (_term.value.length >= 3) {
      return _projects.value.filter((p) => p.name.includes(_term.value))
    } else {
      return []
    }
  })

  async function fillProjects() {
    _projects.value = await db.projects.toArray()
  }

  return { searchTerm, projects, fillProjects }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearches, import.meta.hot))
}
