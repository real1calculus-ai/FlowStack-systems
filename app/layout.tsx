import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CoreLine Automations",
  description: "Premium automation and AI systems for modern businesses.",
  metadataBase: new URL("https://coreline-automations.vercel.app"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-bg text-fg`}>
        <ThemeProvider>
          {/* Background grid */}
          <div
            className="pointer-events-none fixed inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Glow */}
          <div className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent opacity-[0.10] blur-3xl" />
          <div className="pointer-events-none fixed top-40 right-[-150px] h-[420px] w-[420px] rounded-full bg-accent-2 opacity-[0.10] blur-3xl" />

          <Navbar />

          <div className="relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
