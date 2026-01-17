export function ImpactMetrics({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((m) => (
        <div key={m.label} className="card p-4">
          <div className="text-xs text-fg-muted">{m.label}</div>
          <div className="mt-1 text-lg font-semibold">{m.value}</div>
        </div>
      ))}
    </div>
  )
}
