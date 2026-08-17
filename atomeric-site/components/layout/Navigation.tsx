'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

gsap.registerPlugin(ScrollTrigger)

export function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(
    () => {
      const nav = navRef.current
      if (!nav) return

      if (pathname === '/') {
        // ── Homepage: nav starts hidden; reveals after hero logo has flown up ──

        // Immediately hide — outside matchMedia so revertOnUpdate doesn't undo it
        gsap.set(nav, { yPercent: -100, opacity: 0 })

        const mm = gsap.matchMedia()

        mm.add('(prefers-reduced-motion: no-preference)', () => {
          // Fire when 65% of the hero has scrolled past viewport top — logo is ~65% faded
          const st = ScrollTrigger.create({
            trigger: '#hero',
            start: '65% top',
            onEnter: () =>
              gsap.to(nav, { yPercent: 0, opacity: 1, duration: 0.55, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }),
            onLeaveBack: () =>
              gsap.to(nav, { yPercent: -100, opacity: 0, duration: 0.3, ease: 'power2.in' }),
          })
          return () => st.kill()
        })

        mm.add('(prefers-reduced-motion: reduce)', () => {
          const st = ScrollTrigger.create({
            trigger: '#hero',
            start: '65% top',
            onEnter: () => gsap.set(nav, { yPercent: 0, opacity: 1 }),
            onLeaveBack: () => gsap.set(nav, { yPercent: -100, opacity: 0 }),
          })
          return () => st.kill()
        })

        return () => {
          mm.revert()
          // Re-hide on cleanup so the next render starts from hidden state
          gsap.set(nav, { yPercent: -100, opacity: 0 })
        }
      } else {
        // ── Other pages: nav always visible ──
        const mm = gsap.matchMedia()
        mm.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.to(nav, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', delay: 0.1 })
        })
        mm.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set(nav, { yPercent: 0, opacity: 1 })
        })
        return () => mm.revert()
      }
    },
    { dependencies: [pathname], revertOnUpdate: true }
  )

  useEffect(() => {
    if (!menuOpen) return

    const menu = document.getElementById('mobile-menu')
    if (!menu) return

    const focusables = Array.from(menu.querySelectorAll<HTMLElement>('a[href], button'))
    focusables[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '64px',
          background: 'rgba(6,12,24,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,115,185,0.15)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          gap: '16px',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Atomeric home"
          style={{ textDecoration: 'none', flexShrink: 0 }}
          onClick={handleLinkClick}
        >
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '22px', letterSpacing: '-1.5px' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>atom</span>
            <span style={{ color: '#0DBFAD' }}>eric</span>
          </span>
        </Link>

        {/* Desktop center links */}
        <div className="nav-desktop-links">
          <Link href="/services" className="nav-link">What We Do</Link>
          <Link href="/process" className="nav-link">How We Do It</Link>
          <Link href="/about" className="nav-link">Who We Are</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
        </div>

        {/* Theme toggle — desktop only (hidden on mobile via CSS) */}
        <ThemeToggle />

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary nav-cta">
          Get a Free Audit
        </Link>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="nav-hamburger"
          style={{ marginLeft: 'auto' }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 3L19 19M19 3L3 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
      >
        <Link href="/services" className="mobile-nav-link" onClick={handleLinkClick}>What We Do</Link>
        <Link href="/process" className="mobile-nav-link" onClick={handleLinkClick}>How We Do It</Link>
        <Link href="/about" className="mobile-nav-link" onClick={handleLinkClick}>Who We Are</Link>
        <Link href="/blog" className="mobile-nav-link" onClick={handleLinkClick}>Blog</Link>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '14px 32px', marginTop: '8px' }} onClick={handleLinkClick}>
          Get a Free Audit
        </Link>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '24px' }}>
          connect@atomeric.com
        </p>
      </div>
    </>
  )
}
