import { db, type Project } from '@/db'
import { compareAsc } from 'date-fns'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type ProjectSort = 'abc' | 'recent' | 'closest'

const _projects = ref<Project[]>([])

export const useProjectsStore = defineStore('projects', () => {
  const sortOrder = ref<ProjectSort>('abc')

  const projects = computed(() => {
    if (sortOrder.value === 'abc') {
      return _projects.value.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortOrder.value === 'recent') {
      return _projects.value.sort((a, b) =>
        compareAsc(new Date(a.beginDate), new Date(b.beginDate)),
      )
    }

    if (sortOrder.value === 'closest') {
      return _projects.value.sort((a, b) => compareAsc(new Date(a.endDate), new Date(b.endDate)))
    }

    return _projects.value
  })

  async function fillProjects() {
    _projects.value = await db.projects.toArray()
  }

  async function addProject(payload: Omit<Project, 'id' | 'favorite'>) {
    try {
      const id = await db.projects.add({
        name: payload.name.trim(),
        client: payload.client.trim(),
        beginDate: payload.beginDate,
        endDate: payload.endDate,
        file: payload.file,
        favorite: false,
      })

      projects.value.push({
        ...payload,
        id,
        favorite: false,
      })
    } catch (error) {
      console.error(`Failed to add ${payload.name}: ${error}`)
    }
  }

  async function updateProject(id: number, payload: Omit<Project, 'id'>) {
    const index = projects.value.findIndex((p) => p.id === id)

    if (index != -1) {
      projects.value[index] = { ...payload, id }
      await db.projects.update(id, payload)
    }
  }

  async function removeProject(id: number) {
    const index = projects.value.findIndex((p) => p.id === id)

    if (index != -1) {
      projects.value.splice(index, 1)
      await db.projects.delete(id)
    }
  }

  return { sortOrder, projects, fillProjects, addProject, updateProject, removeProject }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot))
}
