import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TechBadges } from '@/components/TechBadges'
import { WorkflowSteps } from '@/components/WorkflowSteps'
import { ImpactMetrics } from '@/components/ImpactMetrics'
import { getProject } from '@/lib/projects'
import { site } from '@/lib/site'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) return { title: 'System' }
  return {
    title: project.title,
    description: project.summary,
  }
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) return notFound()

  return (
    <main className="container-px py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <div className="pill w-fit">{project.tags.join(' • ')}</div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-fg-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/contact" className="btn-primary">
              Build This for My Business
            </Link>
            <a className="btn-ghost" href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp / Call
            </a>
          </div>
        </div>

        <div className="card w-full p-5 md:max-w-sm">
          <div className="text-xs text-fg-muted">Tools used</div>
          <div className="mt-3">
            <TechBadges items={project.tools} />
          </div>
          <div className="mt-5 text-xs text-fg-muted">Estimated impact</div>
          <div className="mt-3">
            <ImpactMetrics items={project.impact} />
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Business Problem</h2>
          <p className="mt-2 text-sm text-fg-muted">{project.problem}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">System Solution</h2>
          <p className="mt-2 text-sm text-fg-muted">{project.solution}</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Workflow Breakdown</h2>
        <p className="mt-2 text-sm text-fg-muted">
          This is an implementation-level walkthrough — structured for clarity, handoff, and scale.
        </p>
        <div className="mt-6">
          <WorkflowSteps steps={project.steps} />
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">What makes this premium</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-fg-muted">
            {project.premiumNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Screenshots / Workflow</h2>
          <p className="mt-2 text-sm text-fg-muted">
            Add screenshots of your Make scenario, Airtable base, and proposal output here.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="h-28 rounded-xl2 border border-line bg-bg" />
            <div className="h-28 rounded-xl2 border border-line bg-bg" />
            <div className="h-28 rounded-xl2 border border-line bg-bg" />
            <div className="h-28 rounded-xl2 border border-line bg-bg" />
          </div>
        </div>
      </section>

      <section className="mt-12 card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Ready to deploy a system like this?</div>
            <div className="mt-1 text-sm text-fg-muted">
              Book a strategy call. We scope the workflow, define outcomes, then build with clear delivery milestones.
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
            <Link href="/contact" className="btn-primary">
              Request a System
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/projects" className="text-sm text-fg-muted hover:text-fg">
          ← Back to Systems
        </Link>
      </div>
    </main>
  )
}
