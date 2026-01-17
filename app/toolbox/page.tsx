import { SectionHeading } from '@/components/SectionHeading'
import { FadeIn } from '@/components/Motion'

export const metadata = { title: 'Toolbox' }

const tools = [
  { name: 'Make', note: 'Orchestration layer — triggers, routing, retries, scheduling, and integrations.' },
  { name: 'Airtable', note: 'Lightweight CRM/database — audit trails, pipelines, and structured records.' },
  { name: 'OpenAI', note: 'Qualification, classification, drafting, and summarization with tight prompts.' },
  { name: 'HTTP & Webhooks', note: 'Connect any API — enrichment, custom endpoints, and event-driven automation.' },
  { name: 'PandaDoc', note: 'Client-ready proposals and documents created automatically from structured data.' },
  { name: 'Slack & Gmail', note: 'Notifications, follow-ups, and internal visibility across teams.' },
  { name: 'Voice Agents (Vapi)', note: 'Call-based qualification and scheduling workflows when voice is the fastest channel.' },
  { name: 'Sheets', note: 'Reporting snapshots, trend tracking, and quick ops dashboards.' },
]

export default function ToolboxPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Stack"
        title="Toolbox"
        description="A curated set of tools I use to build reliable automation systems."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {tools.map((t, idx) => (
          <FadeIn key={t.name} delay={idx * 0.03}>
            <div className="card p-6">
              <div className="text-base font-semibold">{t.name}</div>
              <p className="mt-2 text-sm text-fg-muted">{t.note}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </main>
  )
}
