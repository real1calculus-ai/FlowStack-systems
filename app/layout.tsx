import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Automation & AI Systems`,
    template: `%s — ${site.name}`,
  },
  description:
    'Flowstack Systems builds premium automation and AI workflows that replace manual work, increase speed, and scale operations.',
  metadataBase: new URL('https://flowstack-systems.vercel.app'),
  openGraph: {
    title: `${site.name} — Automation & AI Systems`,
    description:
      'Premium business automation & AI systems studio. We don’t sell tools — we build systems.',
    url: 'https://flowstack-systems.vercel.app',
    siteName: site.name,
    images: ['/og/cover.svg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Automation & AI Systems`,
    description:
      'Premium business automation & AI systems studio. We don’t sell tools — we build systems.',
    images: ['/og/cover.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="bg-grain">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
