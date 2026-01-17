import { SectionHeading } from '@/components/SectionHeading'

export const metadata = { title: 'Add Projects' }

export default function HowToAddProjectsPage() {
  return (
    <main className="container-px py-12">
      <SectionHeading
        eyebrow="Docs"
        title="How to add or edit projects"
        description="This portfolio is data-driven. Update one file to add new systems."
      />

      <div className="mt-10 card p-6">
        <ol className="grid gap-3 text-sm text-fg-muted">
          <li>
            1) Open <code className="rounded bg-bg px-2 py-1">/data/projects.ts</code>.
          </li>
          <li>
            2) Add a new object inside the <code className="rounded bg-bg px-2 py-1">projects</code> array.
          </li>
          <li>
            3) Choose a unique <code className="rounded bg-bg px-2 py-1">slug</code> (used for the URL).
          </li>
          <li>
            4) Fill: title, summary, problem, solution, tools, tags, steps, impact, and premiumNotes.
          </li>
          <li>
            5) Save, push to GitHub, and redeploy on Vercel.
          </li>
        </ol>

        <div className="mt-6">
          <div className="text-sm font-semibold">Tip</div>
          <p className="mt-1 text-sm text-fg-muted">
            Keep each project written for founders: problem → system → outcome. Avoid tool lists without business impact.
          </p>
        </div>
      </div>
    </main>
  )
}
