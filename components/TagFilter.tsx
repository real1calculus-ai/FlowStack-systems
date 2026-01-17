'use client'

import { useMemo, useState } from 'react'
import { TAGS, type Project } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function TagFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>('All')

  const tags = useMemo(() => ['All', ...TAGS], [])

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.tags.includes(active))
  }, [active, projects])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={
              'pill transition ' +
              (active === t ? 'border-transparent bg-brand text-white' : 'hover:bg-bg')
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
