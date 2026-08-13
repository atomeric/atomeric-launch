'use client'

import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CtaBanner } from '@/components/layout/CtaBanner'

gsap.registerPlugin(ScrollTrigger)

// ── Data ──────────────────────────────────────────────────────────────────────

const TRACKS = [
  {
    num: '01',
    tag: 'THINK FIRST',
    name: 'Strategy',
    desc: 'Market positioning, competitive analysis, and AI-powered roadmaps that define where you win before you spend a dollar on execution.',
    caps: [
      'Brand Positioning', 'Competitive Analysis', 'ICP Definition', 'Market Research',
      'Content Strategy', 'GEO Strategy', 'Go-to-Market Planning', 'Messaging Architecture',
    ],
  },
  {
    num: '02',
    tag: 'SHIP FAST',
    name: 'Build',
    desc: 'Websites, platforms, and content systems engineered for speed, conversions, and search visibility — delivered in days, not months.',
    caps: [
      'Website Design', 'Web Development', 'Landing Page Design', 'UI/UX',
      'CMS Setup', 'Technical SEO', 'Email Templates', 'Content Production', 'Brand Identity',
    ],
  },
  {
    num: '03',
    tag: 'SCALE SMART',
    name: 'Grow',
    desc: 'Paid media, organic search, and Generative Engine Optimization that compound over time — turning traffic into qualified pipeline.',
    caps: [
      'GEO Optimization', 'SEO', 'Google Ads', 'Meta Ads', 'LinkedIn Ads',
      'Email Marketing', 'Marketing Automation', 'Social Media', 'Lead Nurturing', 'Affiliate Programs',
    ],
  },
  {
    num: '04',
    tag: 'EVOLVE CONTINUOUSLY',
    name: 'Transform',
    desc: 'Ongoing optimization, AI integration, and data-driven refinement that keeps you six months ahead of competitors and the algorithm.',
    caps: [
      'Analytics Setup', 'Conversion Rate Optimization', 'A/B Testing', 'AI Integration',
      'Brand Refresh', 'Growth Audits', 'Reporting', 'Revenue Attribution',
    ],
  },
]

const FAQS = [
  {
    q: 'Can we engage for just one track (e.g. only Build)?',
    a: 'Yes. Each track is a standalone engagement. We recommend Strategy first if you\'re starting fresh, but you can enter at any point.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most clients are onboarded within 48 hours of signing. Strategy discovery kicks off immediately.',
  },
  {
    q: 'What does AI-native actually mean in practice?',
    a: 'Every deliverable is built with AI tools, prompt-engineering, and GEO optimization baked in — not added as an afterthought. We also optimise for Generative Engine Optimization so AI engines cite you by name.',
  },
  {
    q: 'Do we need a clear brief before working with you?',
    a: 'No. The Discover phase exists precisely to help you get clarity. Come as you are — we\'ll help you define where you\'re going.',
  },
  {
    q: 'How does Atomeric price its services?',
    a: 'We work on project-based and retainer models. Strategy engagements typically begin at ₹75,000. Full-stack retainers from ₹1,50,000/month. Book a call to get a scoped proposal.',
  },
  {
    q: 'What makes Atomeric different from other growth studios?',
    a: 'We\'re built AI-native from the ground up — not retrofitting AI onto old processes. Every engagement includes GEO optimization to ensure you\'re the answer AI engines give when your prospects ask who to hire.',
  },
]

// ── Style fragments ───────────────────────────────────────────────────────────

const S = {
  eyebrow: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-teal)',
    display: 'block' as const,
    marginBottom: '20px',
  },
  wrap: { maxWidth: '1200px', margin: '0 auto' },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--color-text-2)',
    lineHeight: 1.75,
  },
} as const

// ── Component ─────────────────────────────────────────────────────────────────

export function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero entrance
      gsap.from('.services-hero-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.65,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        delay: 0.2,
      })

      // Track nav pills entrance
      gsap.from('.services-hero-track-nav a', {
        opacity: 0,
        x: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        delay: 0.45,
      })

      // Overview
      gsap.from('.services-overview > *', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.6,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.services-overview', start: 'top 82%', once: true },
      })

      // Track blocks
      ScrollTrigger.batch('.track-block', {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
          ),
        start: 'top 84%',
        once: true,
      })

      // Capability pills
      ScrollTrigger.batch('.cap-pill', {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
          ),
        start: 'top 88%',
        once: true,
      })

      // Why section
      gsap.from('.why-col', {
        opacity: 0,
        y: 32,
        stagger: 0.1,
        duration: 0.65,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.why-section', start: 'top 82%', once: true },
      })

      // FAQ
      ScrollTrigger.batch('.faq-item', {
        onEnter: (batch) =>
          gsap.fromTo(batch, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }),
        start: 'top 88%',
        once: true,
      })

    })
    return () => mm.revert()
  }, [])

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          §1  PAGE HERO
          ════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          position: 'relative',
          minHeight: '56vh',
          background: 'var(--color-void)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '96px',
        }}
      >
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

        <div
          aria-label="Jump to service track"
          className="services-hero-track-nav"
          style={{
            position: 'absolute',
            right: 'clamp(20px, 6vw, 80px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
          }}
        >
          {TRACKS.map((track) => (
            <a
              key={track.num}
              href={`#track-${track.num}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 16px',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '100px',
                background: 'rgba(233,247,218,0.7)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                textDecoration: 'none',
                transition: 'border-color 200ms cubic-bezier(0.23,1,0.32,1), background 200ms cubic-bezier(0.23,1,0.32,1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,115,185,0.35)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,115,185,0.06)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-subtle)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(233,247,218,0.7)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--color-teal)',
                  letterSpacing: '0.12em',
                }}
              >
                {track.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--color-text-2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {track.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--color-text-3)',
                  marginLeft: '2px',
                }}
                aria-hidden="true"
              >
                ↓
              </span>
            </a>
          ))}
        </div>

        <div
          className="services-hero-content"
          style={{
            ...S.wrap,
            position: 'relative',
            zIndex: 1,
            width: '100%',
            padding: '64px clamp(20px, 5vw, 80px)',
            maxWidth: '860px',
            marginLeft: 'clamp(20px, 8vw, 160px)',
          }}
        >
          <span style={S.eyebrow}>WHAT WE DO</span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 700,
              color: 'var(--color-text-1)',
              letterSpacing: '-3px',
              lineHeight: 0.95,
              marginBottom: '28px',
            }}
          >
            75+ capabilities.<br />4 disciplines.
          </h1>

          <p
            style={{
              ...S.body,
              fontSize: '18px',
              maxWidth: '580px',
            }}
          >
            From first brief to compound growth — we cover every layer of the modern digital
            stack. AI-native execution across strategy, build, growth, and transformation.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §2  SERVICES OVERVIEW
          ════════════════════════════════════════════════════════ */}
      <section
        aria-label="Services overview"
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: '72px clamp(20px, 5vw, 80px)',
        }}
      >
        <div className="services-overview" style={{ ...S.wrap, maxWidth: '760px' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--color-text-2)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}
          >
            Atomeric is a revenue-driven growth studio that builds revenue systems for ambitious brands.
            We work across four interconnected disciplines — Strategy, Build, Grow, and
            Transform — covering every layer of the modern digital stack so you never have to
            coordinate between agencies again.
          </p>

          <div className="services-overview-labels" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {['01 Strategy', '02 Build', '03 Grow', '04 Transform'].map((label, i) => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: i === 0 ? 'var(--color-teal)' : 'var(--color-text-3)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 240ms ease',
                }}
              >
                {label}
                {i < 3 && (
                  <span style={{ marginLeft: '16px', color: 'var(--color-text-3)', opacity: 0.4 }}>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §3  FOUR SERVICE TRACK SECTIONS
          ════════════════════════════════════════════════════════ */}
      <section aria-label="Service tracks" style={{ background: 'var(--color-void)', padding: '96px 0' }}>
        <div style={S.wrap}>
          {TRACKS.map((track, i) => {
            const isReversed = i % 2 === 1

            return (
              <div key={track.num} id={`track-${track.num}`}>
                {i > 0 && (
                  <div
                    style={{
                      height: '1px',
                      background: 'rgba(175,171,79,0.2)',
                      margin: '0 clamp(20px, 5vw, 80px)',
                    }}
                  />
                )}

                <div
                  className="track-block"
                  style={{
                    display: 'flex',
                    flexDirection: isReversed ? 'row-reverse' : 'row',
                    gap: '64px',
                    alignItems: 'flex-start',
                    padding: '80px clamp(20px, 5vw, 80px)',
                  }}
                >
                  {/* ── Text column ───────────────────── */}
                  <div className="track-block-left" style={{ flex: '1 1 52%', minWidth: 0 }}>
                    <span className="mobile-step-badge" aria-hidden="true">{track.num}</span>
                    {/* Number + tag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--color-text-3)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {track.num}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: 'var(--color-teal)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          background: 'rgba(0,115,185,0.08)',
                          border: '1px solid rgba(0,115,185,0.2)',
                          borderRadius: '100px',
                          padding: '4px 10px',
                        }}
                      >
                        {track.tag}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(40px, 5vw, 60px)',
                        fontWeight: 700,
                        color: 'var(--color-text-1)',
                        letterSpacing: '-2.5px',
                        lineHeight: 1.0,
                        marginBottom: '20px',
                      }}
                    >
                      {track.name}
                    </h2>

                    <p style={{ ...S.body, maxWidth: '480px', marginBottom: '32px' }}>
                      {track.desc}
                    </p>

                    {/* What's included */}
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: 'var(--color-text-3)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '14px',
                        }}
                      >
                        WHAT&apos;S INCLUDED
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {track.caps.slice(0, 5).map((cap) => (
                          <li
                            key={cap}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              color: 'var(--color-text-2)',
                            }}
                          >
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'var(--color-teal)',
                                flexShrink: 0,
                                opacity: 0.6,
                              }}
                            />
                            {cap}
                          </li>
                        ))}
                        {track.caps.length > 5 && (
                          <li
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '10px',
                              color: 'var(--color-text-3)',
                              letterSpacing: '0.05em',
                              paddingLeft: '15px',
                            }}
                          >
                            +{track.caps.length - 5} more capabilities
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* ── Capability pills card ─────────── */}
                  <div className="track-block-right" style={{ flex: '1 1 44%', minWidth: 0 }}>
                    <div
                      style={{
                        background: 'var(--color-surface-2)',
                        borderLeft: '3px solid var(--color-teal)',
                        borderRadius: '0 12px 12px 0',
                        padding: '32px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--color-teal)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '20px',
                        }}
                      >
                        FULL CAPABILITY LIST
                      </span>

                      {/* 3-col pill grid */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        {track.caps.map((cap) => (
                          <span
                            key={cap}
                            className="cap-pill"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              color: 'var(--color-text-2)',
                              border: '1px solid var(--color-border-subtle)',
                              padding: '6px 12px',
                              borderRadius: '100px',
                              background: 'rgba(0,115,185,0.03)',
                              transition: 'border-color 200ms ease, color 200ms ease',
                              cursor: 'default',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.currentTarget as HTMLElement).style.borderColor =
                                'rgba(0,115,185,0.4)'
                              ;(e.currentTarget as HTMLElement).style.color =
                                'var(--color-text-1)'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.currentTarget as HTMLElement).style.borderColor =
                                'var(--color-border-subtle)'
                              ;(e.currentTarget as HTMLElement).style.color =
                                'var(--color-text-2)'
                            }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Large track number — decorative */}
                    <div
                      className="track-watermark-num"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(64px, 8vw, 96px)',
                        fontWeight: 400,
                        color: 'var(--color-text-3)',
                        opacity: 0.35,
                        lineHeight: 1,
                        letterSpacing: '-4px',
                        marginTop: '24px',
                        textAlign: isReversed ? 'left' : 'right',
                        userSelect: 'none',
                      }}
                    >
                      {track.num}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §4  WHY THESE FOUR TRACKS
          ════════════════════════════════════════════════════════ */}
      <section
        aria-label="Why these four tracks"
        className="why-section"
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
          padding: '96px clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={S.wrap}>
          <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
            <span style={S.eyebrow}>THE PROGRESSION</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Four tracks.<br />One mission.
            </h2>
            <p style={{ ...S.body }}>
              Everything Atomeric builds is designed to move the revenue number. The four tracks
              follow a deliberate sequence — but you can enter at any point.
            </p>
          </div>

          <div
            className="why-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'var(--color-border-subtle)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {[
              { num: '01', name: 'Strategy', why: 'Know where you\'re going before spending. Clarity multiplies every dollar that follows.' },
              { num: '02', name: 'Build', why: 'Enter the market with authority. Your digital presence is your first impression to every prospect.' },
              { num: '03', name: 'Grow', why: 'Compound revenue through multi-channel acquisition. GEO-first so AI engines send you traffic.' },
              { num: '04', name: 'Transform', why: 'Keep iterating so you stay six months ahead of competitors and the next algorithm update.' },
            ].map((item) => (
              <div
                key={item.num}
                className="why-col"
                style={{
                  background: 'var(--color-void)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--color-text-1)',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {item.name}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-2)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §5  FAQ
          ════════════════════════════════════════════════════════ */}
      <section
        aria-label="Frequently asked questions"
        style={{
          background: 'var(--color-void)',
          padding: '96px clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={{ ...S.wrap, maxWidth: '780px' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={S.eyebrow}>FAQ</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
              }}
            >
              Common questions,<br />straight answers.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{
                  background: 'var(--color-surface-1)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'var(--color-text-1)',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '18px',
                      color: 'var(--color-teal)',
                      flexShrink: 0,
                      lineHeight: 1,
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms cubic-bezier(0.23, 1, 0.32, 1)',
                      display: 'inline-block',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* grid-template-rows accordion — Geniestudio pattern */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 380ms cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--color-text-2)',
                        lineHeight: 1.75,
                        padding: '0 24px 20px',
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §6  CTA BANNER — shared component
          ════════════════════════════════════════════════════════ */}
      <CtaBanner />
    </>
  )
}
