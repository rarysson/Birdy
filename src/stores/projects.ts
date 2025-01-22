import { db, type Project } from '@/db'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])

  async function fillProjects() {
    projects.value = await db.projects.toArray()
  }

  return { projects, fillProjects }
})
