import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'
import { FadeIn } from '@/components/Motion'

export const metadata = { title: 'Journey' }

const milestones = [
  {
    title: 'Foundation: Make essentials',
    time: 'Phase 1',
    body: 'Triggers, actions, routers, filters, error handling, and clean scenario design.',
  },
  {
    title: 'AI + enrichment workflows',
    time: 'Phase 1–2',
    body: 'Lead scoring, parsing structured output, research/enrichment via HTTP, and reliable routing.',
  },
  {
    title: 'Client-ready systems',
    time: 'Phase 2',
    body: 'Packaging automation as outcomes: lead systems, reporting, onboarding, billing follow-ups.',
  },
  {
    title: 'Scale & authority',
    time: 'Phase 3',
    body: 'Turn projects into templates, maintain via retainers, publish case studies and walkthroughs.',
  },
]

export default function JourneyPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Roadmap"
        title="Automation journey"
        description="A structured path from building systems to selling them at premium rates."
        right={<Link href="/projects" className="btn-primary">View Systems</Link>}
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {milestones.map((m, idx) => (
          <FadeIn key={m.title} delay={idx * 0.05}>
            <div className="card p-6">
              <div className="pill w-fit">{m.time}</div>
              <h3 className="mt-3 text-base font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{m.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 card p-6">
        <h2 className="text-base font-semibold">What I’m building next</h2>
        <p className="mt-2 text-sm text-fg-muted">
          A library of reusable Make blueprints (lead systems, reporting, onboarding, finance follow-ups) packaged as premium systems
          for operators.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/toolbox" className="btn-ghost">See Toolbox</Link>
          <Link href="/contact" className="btn-primary">Request a System</Link>
        </div>
      </div>
    </main>
  )
}
