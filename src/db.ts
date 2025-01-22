import Dexie, { type EntityTable } from 'dexie'

interface Project {
  id: number
  name: string
  client: string
  beginDate: string
  endDate: string
  file?: string
}

const db = new Dexie('ProjectsDatabase') as Dexie & {
  projects: EntityTable<Project, 'id'>
}

db.version(1).stores({
  projects: '++id, name, client, beginDate, endDate, file',
})

export type { Project }
export { db }
