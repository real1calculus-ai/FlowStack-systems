'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/70 backdrop-blur">
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

        <nav className="hidden items-center gap-6 md:flex relative">
          {nav.map((i) => {
            const isActive = pathname === i.href
            return (
              <Link key={i.href} href={i.href} className="relative text-sm text-fg-muted hover:text-fg px-3 py-2 rounded-md transition-colors">
                {i.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-accent/10 rounded-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
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
