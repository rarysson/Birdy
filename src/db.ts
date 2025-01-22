import Dexie, { type EntityTable } from 'dexie'

interface Project {
  id: number
  name: string
  client: string
  beginDate: string
  endDate: string
  file?: string
  favorite: boolean
}

const db = new Dexie('ProjectsDatabase') as Dexie & {
  projects: EntityTable<Project, 'id'>
}

db.version(1).stores({
  projects: '++id, name, client, beginDate, endDate, file, favorite',
})

export type { Project }
export { db }
