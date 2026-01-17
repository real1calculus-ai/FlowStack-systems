export function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((s, idx) => (
        <li key={idx} className="card p-4">
          <div className="text-xs text-fg-muted">Step {idx + 1}</div>
          <div className="mt-1 text-sm">{s}</div>
        </li>
      ))}
    </ol>
  )
}
