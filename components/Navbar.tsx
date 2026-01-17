import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { site } from '@/lib/site'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Systems' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl2 bg-brand text-white">
            F
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-fg-muted">Automation & AI Systems</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-fg-muted hover:text-fg">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Book a Strategy Call
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
