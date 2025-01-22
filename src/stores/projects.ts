import { db, type Project } from '@/db'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])

  async function fillProjects() {
    projects.value = await db.projects.toArray()
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

  async function updateProject(id: number, payload: Project) {
    const index = projects.value.findIndex((p) => p.id === id)

    if (index != -1) {
      projects.value[index] = payload
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

  return { projects, fillProjects, addProject, updateProject, removeProject }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot))
}
