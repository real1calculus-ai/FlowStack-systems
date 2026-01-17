import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-px grid gap-8 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-sm font-semibold">{site.name}</div>
          <p className="mt-2 max-w-md text-sm text-fg-muted">
            {site.brandStatement}
          </p>
          <p className="mt-4 text-xs text-fg-muted">{site.location}</p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase text-fg-muted">Pages</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/projects" className="text-fg-muted hover:text-fg">Systems</Link></li>
            <li><Link href="/services" className="text-fg-muted hover:text-fg">Services</Link></li>
            <li><Link href="/about" className="text-fg-muted hover:text-fg">About</Link></li>
            <li><Link href="/contact" className="text-fg-muted hover:text-fg">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase text-fg-muted">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="text-fg-muted hover:text-fg">{site.email}</a></li>
            <li><a href={`tel:${site.phone}`} className="text-fg-muted hover:text-fg">{site.phone}</a></li>
            <li><a href={site.whatsapp} className="text-fg-muted hover:text-fg" target="_blank" rel="noreferrer">WhatsApp / Call</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="container-px flex flex-col gap-2 text-xs text-fg-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/how-to-add-projects" className="hover:text-fg">Add Projects</Link>
            <Link href="/toolbox" className="hover:text-fg">Toolbox</Link>
            <Link href="/journey" className="hover:text-fg">Journey</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
