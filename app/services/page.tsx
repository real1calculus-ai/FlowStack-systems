import Link from 'next/link'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { FadeIn } from '@/components/Motion'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Services',
}

const tiers = [
  {
    name: 'Starter Automation',
    price: 'Starting from $1,000',
    description: 'Fast, high-leverage automation that removes one manual process end-to-end.',
    bullets: [
      'Lead capture + follow-up flows',
      'Clean data structure (Sheets/Airtable)',
      'Basic routing + notifications',
      'Handover documentation',
    ],
  },
  {
    name: 'Business Operations System',
    price: 'Starting from $3,000 – $6,000',
    description: 'Multi-workflow operating system that connects teams, tools, and reporting.',
    bullets: [
      'CRM pipeline automation',
      'Dashboards + KPI reporting',
      'SLA reminders & escalation rules',
      'API/Webhook integrations',
    ],
  },
  {
    name: 'Full Automation Stack',
    price: 'Starting from $8,000 – $15,000+',
    description: 'Premium, scalable systems with AI qualification, agents, and client-ready outputs.',
    bullets: [
      'AI lead scoring & enrichment',
      'Voice agent qualification (optional)',
      'Proposal/doc generation',
      'Monitoring + resilience patterns',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Engagements"
        title="High-impact automation systems"
        description="Value-based builds designed for founders and operators who want speed, reliability, and clean execution."
        right={
          <Link className="btn-primary" href="/contact">
            Book a Strategy Call
          </Link>
        }
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {tiers.map((t, idx) => (
          <FadeIn key={t.name} delay={idx * 0.05}>
            <div className="card p-6">
              <div className="pill w-fit">{t.name}</div>
              <div className="mt-4 text-2xl font-semibold">{t.price}</div>
              <p className="mt-2 text-sm text-fg-muted">{t.description}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ghost mt-6 w-full">
                Request a System
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 card p-6">
        <div className="text-sm font-semibold">Retainer: Monitoring & Optimization</div>
        <p className="mt-2 text-sm text-fg-muted">
          For teams that want systems that stay reliable. I monitor runs, fix edge cases, improve performance, and ship iterative upgrades.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="pill">$500 – $2,000/month</span>
          <span className="pill">SLA-based response</span>
          <span className="pill">Monthly system review</span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-sm font-semibold">What you get</div>
          <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
            <li>• A clear system map: triggers, routing, data model, and responsibilities.</li>
            <li>• Production-ready builds with error handling and readable modules.</li>
            <li>• Documentation + handover so your team can operate confidently.</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-sm font-semibold">Best-fit clients</div>
          <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
            <li>• Founders who value speed and execution.</li>
            <li>• Agencies managing lead flow + operations.</li>
            <li>• Ops-heavy businesses where delays cost money.</li>
          </ul>
          <div className="mt-4 text-sm text-fg-muted">Phone: {site.phone} • Email: {site.email}</div>
        </div>
      </div>
    </main>
  )
}
