import { SectionHeading } from '@/components/SectionHeading'
import { TagFilter } from '@/components/TagFilter'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Systems',
}

export default function ProjectsPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Portfolio"
        title="Systems I build"
        description="Each system is designed for speed, clarity, and reliability — not just a pile of zaps. Filter by outcome below."
      />
      <div className="mt-8">
        <TagFilter projects={projects} />
      </div>
    </main>
  )
}
