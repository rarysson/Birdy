import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { db, type Project } from '@/db'
import { refDebounced } from '@vueuse/core'

export type Search = {
  id: number
  term: string
}

const _projects = ref<Project[]>([])

export const useSearches = defineStore('searches', () => {
  const searchTerm = ref('')
  const latestSearches = ref<Search[]>([])
  const projects = ref<Project[]>([])

  const _term = refDebounced(searchTerm, 250)

  async function fillProjects() {
    _projects.value = await db.projects.toArray()
  }

  function removeSearch(id: number) {
    const index = latestSearches.value.findIndex((s) => s.id === id)

    if (index !== -1) {
      latestSearches.value.splice(index, 1)
    }
  }

  watch(_term, (term) => {
    if (term.length >= 3) {
      latestSearches.value = [
        { id: Date.now(), term: _term.value },
        ...latestSearches.value.slice(0, 4),
      ]

      projects.value = _projects.value.filter((p) => p.name.includes(term))
    } else {
      projects.value = []
    }
  })

  return { searchTerm, projects, latestSearches, fillProjects, removeSearch }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearches, import.meta.hot))
}
