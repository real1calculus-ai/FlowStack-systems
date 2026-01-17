import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'
import { TechBadges } from '@/components/TechBadges'
import { FadeIn } from '@/components/Motion'
import { site } from '@/lib/site'

export const metadata = {
  title: 'About',
}

const skills = [
  'Make',
  'Airtable',
  'APIs',
  'Webhooks',
  'OpenAI',
  'JSON',
  'Text Parsing',
  'Slack',
  'Gmail',
  'PandaDoc',
  'Voice Agents (Vapi)',
]

const process = [
  { title: 'Audit', body: 'We map the workflow, identify bottlenecks, and define success metrics.' },
  { title: 'Design', body: 'We design a reliable system architecture: triggers, routing logic, data structures, and fallbacks.' },
  { title: 'Build', body: 'We build in Make with clean modules, strong error handling, and readable scenario structure.' },
  { title: 'Test', body: 'We test edge cases, rate limits, and failure paths — then tune for stability.' },
  { title: 'Deploy', body: 'We ship with documentation and handover so it can scale without babysitting.' },
  { title: 'Monitor', body: 'Optional ongoing monitoring, optimization, and improvements via retainer.' },
]

export default function AboutPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="About"
        title={`Hi, I’m ${site.founder}`}
        description="I design business automation systems that reduce manual work and scale operations — for serious SMEs, agencies, and operators."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <FadeIn>
          <div className="card p-6 md:col-span-2">
            <h2 className="text-base font-semibold">What CoreLine Automations does</h2>
            <p className="mt-3 text-sm text-fg-muted">
              CoreLine Automations is a premium automation & AI systems studio. I help teams remove repetitive work, speed up response
              time, and build reliable operations using Make, APIs, and modern tools.
            </p>
            <p className="mt-3 text-sm text-fg-muted">
              The goal is simple: systems that feel invisible. If it needs babysitting, it’s not finished.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/projects" className="btn-ghost">View Systems</Link>
              <Link href="/contact" className="btn-primary">Book a Strategy Call</Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card p-6">
            <h3 className="text-base font-semibold">Core skills</h3>
            <div className="mt-4">
              <TechBadges items={skills} />
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-12">
        <SectionHeading
          eyebrow="Method"
          title="How I work"
          description="A clear process that protects quality and keeps delivery predictable."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="pill w-fit">{p.title}</div>
              <p className="mt-3 text-sm text-fg-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
