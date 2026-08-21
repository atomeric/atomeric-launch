'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CtaBanner } from '@/components/layout/CtaBanner'

gsap.registerPlugin(ScrollTrigger)

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    name: 'Discover',
    desc: "We go deep into your market, competitors, ICP, and current positioning. What's working, what isn't, and where the white space is.",
    deliverables: [
      'Market audit',
      'Competitor analysis',
      'ICP definition',
      'Opportunity map',
    ],
    timeline: 'Days 1–3',
  },
  {
    num: '02',
    name: 'Strategize',
    desc: 'We build your bespoke playbook: positioning, channel priorities, content pillars, and a 90-day roadmap. You review and sign off before we build a single pixel.',
    deliverables: [
      'Brand positioning document',
      'Content strategy',
      'Channel roadmap',
      '90-day plan',
    ],
    timeline: 'Days 4–7',
  },
  {
    num: '03',
    name: 'Build',
    desc: 'We design and engineer every asset — website, content, campaigns, automations — to your brief and brand. Fast execution without cutting corners.',
    deliverables: [
      'Website & landing pages',
      'Content calendar',
      'Ad creative',
      'Automation setup',
    ],
    timeline: 'Days 8–21',
  },
  {
    num: '04',
    name: 'Launch',
    desc: 'Coordinated deployment across all channels. First impressions happen once — we plan for maximum impact on day one.',
    deliverables: [
      'Coordinated go-live',
      'Tracking verification',
      'Initial campaign activation',
    ],
    timeline: 'Day 21',
  },
  {
    num: '05',
    name: 'Measure & Scale',
    desc: "We track what matters: pipeline, conversions, compounding growth. No vanity metrics. We double down on what works and cut what doesn't — monthly.",
    deliverables: [
      'Monthly performance reports',
      'CRO iterations',
      'Channel scaling recommendations',
    ],
    timeline: 'Ongoing',
  },
]

// ── Shared style fragments ────────────────────────────────────────────────────

const S = {
  eyebrow: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px' as const,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-teal)',
    display: 'block' as const,
    marginBottom: '20px',
  },
  wrap: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--color-text-2)',
    lineHeight: 1.75,
  },
} as const

// ── Component ─────────────────────────────────────────────────────────────────

export function ProcessContent() {
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // ── Hero entrance
      gsap.from('.process-hero-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.6,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        delay: 0.2,
      })

      // ── Overview steps bar
      gsap.from('.overview-step', {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 0.5,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.process-overview', start: 'top 85%', once: true },
      })

      // ── Step blocks
      ScrollTrigger.batch('.step-block', {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
          ),
        start: 'top 82%',
        once: true,
      })

      // ── Process hero orbital
      gsap.to('.process-arc-outer', {
        rotation: 360,
        duration: 48,
        repeat: -1,
        ease: 'none',
        svgOrigin: '280 280',
      })
      gsap.to(['.process-arc-mid', '.process-arc-dot'], {
        rotation: -360,
        duration: 32,
        repeat: -1,
        ease: 'none',
        svgOrigin: '280 280',
      })
      gsap.to('.process-arc-inner', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        svgOrigin: '280 280',
      })

      // ── Methodology callout
      gsap.from('.methodology-callout', {
        opacity: 0,
        x: -24,
        duration: 0.6,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.methodology-callout', start: 'top 85%', once: true },
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
        style={{
          position: 'relative',
          minHeight: '60vh',
          background: 'var(--color-void)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '96px',
        }}
      >
        {/* Blueprint grid */}
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

        <svg
          aria-hidden="true"
          className="process-hero-orbital"
          viewBox="0 0 560 560"
          width="560"
          height="560"
          fill="none"
          style={{
            position: 'absolute',
            right: '-80px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Outer ring — 140° arc */}
          <circle
            cx="280" cy="280" r="250"
            stroke="rgba(0,115,185,0.06)"
            strokeWidth="1"
            strokeDasharray="611 1960"
            strokeLinecap="round"
            className="process-arc-outer"
          />
          {/* Mid ring — 100° arc */}
          <circle
            cx="280" cy="280" r="180"
            stroke="rgba(0,115,185,0.05)"
            strokeWidth="1"
            strokeDasharray="314 1131"
            strokeLinecap="round"
            className="process-arc-mid"
          />
          {/* Inner ring — 80° arc */}
          <circle
            cx="280" cy="280" r="110"
            stroke="rgba(0,115,185,0.04)"
            strokeWidth="1"
            strokeDasharray="154 692"
            className="process-arc-inner"
          />
          {/* Electron dot — outer orbit */}
          <circle
            cx="530" cy="280" r="3.5"
            fill="rgba(0,115,185,0.16)"
            className="process-arc-dot"
          />
          {/* Step count ghost — "05" behind arcs */}
          <text
            x="280" y="310"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="120"
            fontWeight="400"
            fill="rgba(12,4,87,0.035)"
            letterSpacing="-4"
            style={{ userSelect: 'none' }}
          >
            05
          </text>
        </svg>

        <div
          className="process-hero-content"
          style={{
            ...S.wrap,
            position: 'relative',
            zIndex: 1,
            width: '100%',
            padding: '64px clamp(20px, 5vw, 80px)',
            maxWidth: '800px',
            marginLeft: 'clamp(20px, 8vw, 160px)',
          }}
        >
          <span style={S.eyebrow}>OUR PROCESS</span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 700,
              color: 'var(--color-text-1)',
              letterSpacing: '-2.5px',
              lineHeight: 1.0,
              marginBottom: '28px',
            }}
          >
            How we turn<br />ambition into revenue.
          </h1>

          <p
            style={{
              ...S.body,
              fontSize: '18px',
              maxWidth: '560px',
            }}
          >
            A 5-step methodology refined for AI-native businesses. No guesswork. No bloated
            timelines. Just a clear path from where you are to where you want to be.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §2  PROCESS OVERVIEW — 5-step index
          ════════════════════════════════════════════════════════ */}
      <section
        className="process-overview"
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: '56px clamp(20px, 5vw, 80px)',
        }}
      >
        <div className="process-overview-grid" style={S.wrap}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="overview-step"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingLeft: i > 0 ? '24px' : '0',
                borderLeft: i > 0 ? '1px solid var(--color-border-subtle)' : 'none',
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
                {step.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-0.3px',
                }}
              >
                {step.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--color-text-3)',
                  letterSpacing: '0.05em',
                }}
              >
                {step.timeline}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §3  FIVE STEP DEEP-DIVE
          ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-void)', padding: '96px 0' }}>
        <div style={S.wrap}>
          {STEPS.map((step, i) => {
            const isReversed = i % 2 === 1

            return (
              <div key={step.num}>
                {/* Gold rule between steps */}
                {i > 0 && (
                  <div
                    style={{
                      height: '1px',
                      background: 'var(--color-gold-subtle)',
                      margin: '0 clamp(20px, 5vw, 80px)',
                    }}
                  />
                )}

                <div
                  className="step-block card-lift"
                  style={{
                    display: 'flex',
                    flexDirection: isReversed ? 'row-reverse' : 'row',
                    gap: '64px',
                    alignItems: 'flex-start',
                    padding: '64px clamp(20px, 5vw, 80px)',
                  }}
                >
                  {/* ── Text column ───────────────────── */}
                  <div className="step-block-left" style={{ flex: '1 1 52%', minWidth: 0 }}>
                    <span className="mobile-step-badge" aria-hidden="true">{step.num}</span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(36px, 4vw, 52px)',
                        fontWeight: 700,
                        color: 'var(--color-text-1)',
                        letterSpacing: '-2px',
                        lineHeight: 1.05,
                        marginBottom: '24px',
                      }}
                    >
                      {step.name}
                    </h2>

                    <p style={{ ...S.body, marginBottom: '32px', maxWidth: '520px' }}>
                      {step.desc}
                    </p>

                    {/* Deliverables */}
                    <div style={{ marginBottom: '24px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-text-3)',
                          display: 'block',
                          marginBottom: '12px',
                        }}
                      >
                        WHAT YOU GET
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {step.deliverables.map((d) => (
                          <li
                            key={d}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              fontFamily: 'var(--font-body)',
                              fontSize: '15px',
                              color: 'var(--color-text-2)',
                            }}
                          >
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'var(--color-teal)',
                                flexShrink: 0,
                                opacity: 0.7,
                              }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--color-accent-muted)',
                        border: '1px solid var(--color-accent-border)',
                        borderRadius: '6px',
                        padding: '6px 14px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--color-text-3)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        TIMELINE
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--color-teal)',
                        }}
                      >
                        {step.timeline}
                      </span>
                    </div>
                  </div>

                  {/* ── Visual column ─────────────────── */}
                  <div className="step-block-right" style={{ flex: '1 1 44%', minWidth: 0 }}>
                    {/* Decorative deliverables card */}
                    <div
                      style={{
                        background: 'var(--color-surface-1)',
                        borderLeft: '3px solid var(--color-teal)',
                        borderRadius: '0 12px 12px 0',
                        padding: '28px 32px',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-teal)',
                          marginBottom: '16px',
                        }}
                      >
                        DELIVERABLES
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {step.deliverables.map((d) => (
                          <div
                            key={d}
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '13px',
                              color: 'var(--color-text-2)',
                              padding: '7px 12px',
                              background: 'rgba(12,4,87,0.03)',
                              borderRadius: '4px',
                              border: '1px solid var(--color-border-subtle)',
                            }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Large step number — decorative, anchored below card */}
                    <div
                      className="step-watermark-num"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(64px, 8vw, 96px)',
                        fontWeight: 400,
                        color: 'var(--color-text-3)',
                        lineHeight: 1,
                        letterSpacing: '-4px',
                        opacity: 0.4,
                        userSelect: 'none',
                        marginTop: '24px',
                        textAlign: isReversed ? 'left' : 'right',
                      }}
                    >
                      {step.num}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §4  METHODOLOGY CALLOUT — GEO-First
          ════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--color-surface-1)',
          padding: '96px clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={S.wrap}>
          <div
            className="methodology-callout"
            style={{
              background: 'var(--color-surface-2)',
              borderLeft: '3px solid var(--color-teal)',
              borderRadius: '12px',
              padding: '40px 48px',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-teal)',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              BUILT INTO EVERY STEP
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '-1px',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              GEO-First Methodology
            </h3>
            <p
              style={{
                ...S.body,
                maxWidth: '620px',
              }}
            >
              The next search is a conversation with an AI. We optimize for Generative Engine
              Optimization — so when ChatGPT, Perplexity, or Gemini answers your prospect&apos;s
              question, your brand is the answer. Every step in our process — from positioning to
              content to launch — is built to make you the authoritative answer in AI search.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §5  CTA STRIP — shared component
          ════════════════════════════════════════════════════════ */}
      <CtaBanner />
    </>
  )
}
