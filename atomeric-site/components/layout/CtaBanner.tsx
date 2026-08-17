'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)
  const torchRef = useRef<HTMLDivElement>(null)

  // Entrance animation (unchanged)
  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      })
      tl.from('.cta-watermark', { opacity: 0, y: 20, duration: 1.2, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }, 0)
        .from('.cta-headline', { opacity: 0, y: 32, duration: 0.8, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }, 0)
        .from('.cta-subtext', { opacity: 0, y: 32, duration: 0.8, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }, 0.15)
        .from('.cta-button', { opacity: 0, y: 16, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', immediateRender: false }, 0.3)
        .from('.cta-trust', { opacity: 0, duration: 0.5, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }, 0.5)
    })
    return () => mm.revert()
  }, { scope: sectionRef })

  // Cursor torch effect on watermark
  useGSAP(() => {
    const wrapper = watermarkRef.current
    const layer2 = torchRef.current
    if (!wrapper || !layer2) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      let lastX = 0
      let lastTime = 0

      const onMove = (e: MouseEvent) => {
        const rect = wrapper.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const now = Date.now()
        const velocity = Math.abs(e.clientX - lastX) / Math.max(1, now - lastTime)
        const radius = Math.max(120, Math.min(260, 240 - velocity * 80))
        lastX = e.clientX
        lastTime = now

        const progress = e.clientX / window.innerWidth
        const r = Math.round(0   + (12  - 0)   * progress)
        const g = Math.round(115 + (4   - 115) * progress)
        const b = Math.round(185 + (87  - 185) * progress)
        const torchColor = `rgba(${r},${g},${b},0.75)`

        layer2.style.background = `radial-gradient(circle ${radius}px at ${x}px ${y}px, ${torchColor} 0%, rgba(${r},${g},${b},0.2) 45%, transparent 70%)`
        layer2.style.webkitBackgroundClip = 'text'
        layer2.style.backgroundClip = 'text'
        layer2.style.color = 'transparent'

        gsap.to(layer2, { opacity: 1, duration: 0.3, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', overwrite: 'auto' })
      }

      const onLeave = () => {
        gsap.to(layer2, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
      }

      wrapper.addEventListener('mousemove', onMove)
      wrapper.addEventListener('mouseleave', onLeave)

      return () => {
        wrapper.removeEventListener('mousemove', onMove)
        wrapper.removeEventListener('mouseleave', onLeave)
      }
    })

    return () => mm.revert()
  }, [])

  const sharedTextStyle: React.CSSProperties = {
    fontFamily: 'var(--font-syne)',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    textAlign: 'center',
    lineHeight: 0.85,
    userSelect: 'none',
    color: 'transparent',
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--color-void) 0%, var(--color-surface-2) 40%, var(--color-surface-1) 100%)',
        borderTop: '1px solid rgba(0,115,185,0.1)',
        paddingTop: '120px',
        paddingLeft: 'clamp(20px, 5vw, 80px)',
        paddingRight: 'clamp(20px, 5vw, 80px)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
      }}
    >
      {/* Watermark wrapper — two layers stacked */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="cta-watermark"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          pointerEvents: 'auto',
          zIndex: 0,
        }}
      >
        {/* Layer 1 — ghost outline (always visible) */}
        <div
          className="cta-watermark-text"
          style={{
            ...sharedTextStyle,
            position: 'relative',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,115,185,0.15)' }}>atom</span>
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,115,185,0.14)' }}>eric</span>
        </div>

        {/* Layer 2 — torch fill (cursor-reactive) */}
        <div
          ref={torchRef}
          className="cta-watermark-text atomeric-torch"
          style={{
            ...sharedTextStyle,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            opacity: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <span>atom</span><span>eric</span>
        </div>
      </div>

      {/* Shape 1 — large circle, desktop only */}
      <svg
        aria-hidden="true"
        className="cta-circle-shape"
        viewBox="0 0 480 480"
        width="480"
        height="480"
        fill="none"
        style={{
          position: 'absolute',
          right: '-80px',
          top: '45%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <circle cx="240" cy="240" r="239" stroke="rgba(0,115,185,0.07)" strokeWidth="1" />
      </svg>

      {/* Shape 2 — small rotated square */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        width="120"
        height="120"
        fill="none"
        style={{
          position: 'absolute',
          left: 'clamp(40px, 6vw, 100px)',
          top: '30%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <rect x="20" y="20" width="80" height="80" stroke="rgba(12,4,87,0.08)" strokeWidth="1" transform="rotate(45 60 60)" />
      </svg>

      {/* Content */}
      <div
        className="cta-content"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        <h2
          className="cta-headline"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 700,
            color: 'var(--color-text-1)',
            letterSpacing: '-2px',
            lineHeight: 1.05,
          }}
        >
          You Know You&apos;re Better.<br />Now Make It Obvious.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(11px, 1.2vw, 13px)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: 'var(--color-teal)',
            marginBottom: '28px',
            marginTop: '-8px',
          }}
        >
          Position better. Convert more. Grow faster.
        </p>

        <p
          className="cta-subtext"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--color-text-2)',
            lineHeight: 1.65,
            maxWidth: '480px',
          }}
        >
          A 30-minute strategy call. No pitch deck. No fluff. Just an honest conversation about where
          you want to go and whether we&apos;re the right team to get you there.
        </p>

        <Link
          href="/contact"
          className="btn-primary cta-button"
          style={{ padding: '14px 36px', fontSize: '15px', position: 'relative', zIndex: 2 }}
        >
          Book Your Free 30-Min Call
        </Link>

        <span
          className="cta-trust"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-text-3)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          FREE · NO COMMITMENT · 48-HOUR RESPONSE
        </span>
      </div>

      {/* Bridge arch — spans the gap between content and watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 80"
        width="320"
        height="80"
        fill="none"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 'clamp(80px, 12vw, 160px)',
          transform: 'translateX(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      >
        {/* Upper arch — frames the watermark from above */}
        <path
          d="M 10 70 Q 160 0 310 70"
          stroke="rgba(12,4,87,0.08)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Second arch — slightly larger, lower opacity */}
        <path
          d="M 0 80 Q 160 -8 320 80"
          stroke="rgba(0,115,185,0.05)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </section>
  )
}
