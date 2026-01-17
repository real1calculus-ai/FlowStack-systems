import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FadeIn } from '@/components/Motion'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { site } from '@/lib/site'

export default function Home() {
  const featured = projects[0]
  const highlights = [...projects].slice(1, 4)

  return (
    <div className="bg-grain">
      <section className="container-px pt-14 md:pt-20">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="pill"><Sparkles size={14} /> Premium Automation Studio</div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                We build automation systems that run your business without constant supervision.
              </h1>
              <p className="mt-4 max-w-xl text-base text-fg-muted sm:text-lg">
                AI-powered workflows using Make, APIs, and modern tools — designed for scale. We don&apos;t sell tools — we build systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View Systems <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Book Strategy Call
                </Link>
                <a href={site.whatsapp} className="btn-ghost" target="_blank" rel="noreferrer">
                  WhatsApp / Call
                </a>
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                {site.location}
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="card p-6">
                <div className="pill">Core Brand Message</div>
                <p className="mt-3 text-sm text-fg-muted">{site.brandStatement}</p>
                <div className="mt-5 grid gap-3">
                  <div className="card p-4">
                    <div className="text-xs text-fg-muted">Typical outcomes</div>
                    <div className="mt-1 text-sm">Faster response, fewer mistakes, clearer operations.</div>
                  </div>
                  <div className="card p-4">
                    <div className="text-xs text-fg-muted">Best for</div>
                    <div className="mt-1 text-sm">Founders, agencies, and operations-heavy teams.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container-px mt-16">
        <SectionHeading
          eyebrow="What we do"
          title="High-leverage systems for lead flow, operations, and reporting"
          description="Automation that feels invisible — reliable, traceable, and built for scale."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { title: 'Lead Systems', desc: 'Capture, qualify, route, and follow up automatically.' },
            { title: 'AI Qualification', desc: 'Scoring, enrichment, intent detection, and triage.' },
            { title: 'Ops Automation', desc: 'Onboarding, invoicing, internal workflows, escalations.' },
            { title: 'Reporting', desc: 'Daily/weekly KPI dashboards and executive summaries.' },
          ].map((i) => (
            <div key={i.title} className="card p-5">
              <div className="text-sm font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-fg-muted">{i.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mt-16">
        <SectionHeading
          eyebrow="How it works"
          title="A delivery process built for premium outcomes"
          description="Clear steps, minimal meetings, maximum reliability."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {[
            { step: 'Audit', desc: 'Map the workflow and identify leverage points.' },
            { step: 'Design', desc: 'Define data model, routing logic, and fallbacks.' },
            { step: 'Build', desc: 'Implement in Make + tools with clean modules.' },
            { step: 'Test', desc: 'Edge cases, retries, and failure handling.' },
            { step: 'Deploy', desc: 'Production rollout with documentation.' },
            { step: 'Monitor', desc: 'Ongoing optimization via retainer.' },
          ].map((i, idx) => (
            <div key={i.step} className="card p-5">
              <div className="text-xs text-fg-muted">0{idx + 1}</div>
              <div className="mt-1 text-sm font-semibold">{i.step}</div>
              <div className="mt-2 text-sm text-fg-muted">{i.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mt-16">
        <SectionHeading
          eyebrow="Featured system"
          title={featured.title}
          description={featured.summary}
          right={
            <Link href={`/projects/${featured.slug}`} className="btn-primary">
              View case study <ArrowRight size={16} />
            </Link>
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card p-6 md:col-span-2">
            <div className="pill">Why it&apos;s premium</div>
            <ul className="mt-4 grid gap-3 text-sm text-fg-muted">
              {featured.premiumNotes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <div className="pill">Estimated impact</div>
            <ul className="mt-4 grid gap-3 text-sm">
              {featured.impact.map((m) => (
                <li key={m.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-fg-muted">{m.label}</span>
                  <span className="font-semibold">{m.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-px mt-16 pb-20">
        <SectionHeading
          eyebrow="More systems"
          title="Reusable building blocks for scalable operations"
          description="A selection of systems I recommend and build for clients."
          right={<Link href="/projects" className="btn-ghost">View all</Link>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
