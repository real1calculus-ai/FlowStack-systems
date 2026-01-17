import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Contact',
}

const faqs = [
  {
    q: 'What does a strategy call cover?',
    a: 'We map your workflow, identify high-leverage automation opportunities, and define success metrics. You leave with a clear build plan.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes — via retainer. Monitoring, optimization, and incremental improvements keep systems reliable as your business grows.',
  },
  {
    q: 'How long does a system take to build?',
    a: 'Most systems ship in 3–10 business days depending on scope, tools, and how quickly access is provided.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'Access to the tools involved (or test accounts), a clear description of the workflow, and the desired outcomes (time saved, response speed, reporting).',
  },
]

export default function ContactPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Contact"
        title="Book a Strategy Call"
        description="Serious about removing manual work and scaling operations? Reach out — I’ll respond with next steps and a clear scope path."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">Send a request</h2>
          <p className="mt-2 text-sm text-fg-muted">
            This form is front-end only. It generates an email draft you can send instantly.
          </p>

          <form
            className="mt-6 grid gap-4"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-fg-muted">Name</span>
                <input name="name" className="h-11 rounded-xl2 border border-line bg-bg px-4" placeholder="Your name" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-fg-muted">Company</span>
                <input name="company" className="h-11 rounded-xl2 border border-line bg-bg px-4" placeholder="Company / Brand" />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-fg-muted">What do you want to automate?</span>
              <textarea
                name="message"
                className="min-h-[120px] rounded-xl2 border border-line bg-bg px-4 py-3"
                placeholder="Describe the workflow, tools you use (CRM, email, WhatsApp, etc.), and the outcome you want."
              />
            </label>

            <div className="flex flex-wrap gap-2">
              <button className="btn-primary" type="submit">
                Request a System
              </button>
              <a className="btn-ghost" href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp / Call
              </a>
              <Link className="btn-ghost" href="/services">
                View Services
              </Link>
            </div>
          </form>
        </div>

        <div className="card p-6">
          <h3 className="text-base font-semibold">Direct contact</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="btn-ghost justify-start" href={`tel:${site.phone}`}>
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a className="btn-ghost justify-start" href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a className="btn-ghost justify-start" href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp / Call
            </a>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase text-fg-muted">Positioning</div>
            <p className="mt-2 text-sm text-fg-muted">
              Premium, value-based systems — designed to reduce manual work, increase speed, and improve operational reliability.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="card p-5">
              <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-fg-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
