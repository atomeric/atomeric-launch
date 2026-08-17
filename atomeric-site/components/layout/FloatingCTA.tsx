'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { gsap } from 'gsap'

export function FloatingCTA() {
  const pathname = usePathname()
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const show = () => {
    setIsVisible(true)
    const el = buttonRef.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(el,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
      )
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(el, { opacity: 1, y: 0 })
    })
  }

  const hide = () => {
    const el = buttonRef.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(el, {
        opacity: 0, y: 8, duration: 0.25, ease: 'power2.in',
        onComplete: () => setIsVisible(false),
      })
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(el, { opacity: 0 })
      setIsVisible(false)
    })
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 800 && !isVisible) show()
      if (y < 400 && isVisible) hide()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isVisible])

  // Don't render on /contact or server
  if (pathname === '/contact') return null

  return (
    <Link
      ref={buttonRef}
      href="/contact"
      className="btn-primary floating-cta-btn"
      aria-label="Book a strategy call"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 40,
        padding: '11px 18px 11px 14px',
        fontSize: '13px',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        gap: '8px',
        opacity: 0,
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(0,115,185,0.22)',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Calendar icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect x="3" y="4" width="14" height="14" rx="2" />
        <path d="M3 8h14M7 2v4M13 2v4" />
      </svg>
      Book a Call
    </Link>
  )
}
