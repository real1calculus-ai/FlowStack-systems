import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string
  title: string
  description?: string
  right?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <div className="pill w-fit">{eyebrow}</div> : null}
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-fg-muted">{description}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}
