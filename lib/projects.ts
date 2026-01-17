import { projects } from '@/data/projects'

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
