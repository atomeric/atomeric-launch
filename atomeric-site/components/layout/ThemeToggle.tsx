'use client'

import { useLayoutEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('atomeric-theme', theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useLayoutEffect(() => {
    const current = document.documentElement.dataset.theme as Theme
    if (current === 'dark' || current === 'light') {
      setTheme(current)
    }
  }, [])

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-toggle-btn"
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--color-text-2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'color 160ms ease, background 160ms ease',
      }}
    >
      {isDark ? (
        /* Sun — shown in dark mode, click to go light */
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <circle cx="10" cy="10" r="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="10" y1="16" x2="10" y2="18" />
          <line x1="2" y1="10" x2="4" y2="10" />
          <line x1="16" y1="10" x2="18" y2="10" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="14.36" y1="14.36" x2="15.78" y2="15.78" />
          <line x1="4.22" y1="15.78" x2="5.64" y2="14.36" />
          <line x1="14.36" y1="5.64" x2="15.78" y2="4.22" />
        </svg>
      ) : (
        /* Moon — shown in light mode, click to go dark */
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.5 10.9A7.5 7.5 0 0 1 9.1 2.5a7.5 7.5 0 1 0 8.4 8.4z" />
        </svg>
      )}
    </button>
  )
}
