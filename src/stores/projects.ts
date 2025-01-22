import { db, type Project } from '@/db'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])

  async function fillProjects() {
    projects.value = await db.projects.toArray()
  }

  function updateProject(id: number, payload: Project) {
    const index = projects.value.findIndex((p) => p.id === id)

    if (index != -1) {
      projects.value[index] = payload
    }
  }

  return { projects, fillProjects, updateProject }
})
