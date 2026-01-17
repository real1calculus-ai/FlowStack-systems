export function TechBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="pill">
          {t}
        </span>
      ))}
    </div>
  )
}
