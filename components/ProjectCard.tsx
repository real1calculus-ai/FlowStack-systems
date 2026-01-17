import Link from 'next/link'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card group p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-fg-muted">{project.summary}</p>
        </div>
        <span className="pill shrink-0">View</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 text-sm text-brand">
        <span className="opacity-80 group-hover:opacity-100">Request this system →</span>
      </div>
    </Link>
  )
}
