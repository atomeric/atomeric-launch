'use client'

import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

// nav links with explicit hrefs so labels can change independently
const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'What We Do',  href: '/#services' },
  { label: 'How We Do It',href: '/#process' },
  { label: 'Who We Are',  href: '/#about' },
  { label: 'Blog',        href: '/blog' },
  { label: 'Contact',     href: '/#contact' },
]
const SERVICE_LINKS = ['Strategy', 'Build', 'Grow', 'Transform']

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'var(--color-surface-1)',
        borderTop: '1px solid var(--color-border-subtle)',
        paddingTop: '64px',
        paddingBottom: '64px',
        paddingLeft: 'clamp(20px, 5vw, 80px)',
        paddingRight: 'clamp(20px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1 — Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '22px', letterSpacing: '-1.5px' }}>
              <span style={{ color: 'var(--color-text-1)' }}>atom</span>
              <span style={{ color: 'var(--color-teal)' }}>eric</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-3)',
              }}
            >
              Revenue-Driven Growth Studio
            </span>
            <a
              href="mailto:connect@atomeric.com"
              className="footer-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-2)',
                textDecoration: 'none',
                marginTop: '4px',
              }}
            >
              connect@atomeric.com
            </a>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '8px' }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    color: 'var(--color-text-3)',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-teal)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-3)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--color-text-3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              NAVIGATE
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-2)',
                    textDecoration: 'none',
                    transition: 'color 240ms cubic-bezier(0.23, 1, 0.32, 1)',
                    width: 'fit-content',
                  }}
                  className="footer-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--color-text-3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              SERVICES
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICE_LINKS.map(name => (
                <Link
                  key={name}
                  href={`/#${name.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-2)',
                    textDecoration: 'none',
                    transition: 'color 240ms cubic-bezier(0.23, 1, 0.32, 1)',
                    width: 'fit-content',
                  }}
                  className="footer-link"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-text-3)',
            }}
          >
            © 2025 Atomeric. All rights reserved. · Built AI-Native.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link
              href="/privacy"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--color-text-3)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 200ms ease',
              }}
              className="footer-link"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--color-text-3)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 200ms ease',
              }}
              className="footer-link"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
