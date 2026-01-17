'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const resolved = theme === 'system' ? systemTheme : theme
  const isDark = resolved === 'dark'

  if (!mounted) return <div className="h-9 w-9 rounded-xl2 border border-line bg-bg-soft" />

  return (
    <button
      type="button"
      className="btn-ghost h-9 w-9 p-0"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
