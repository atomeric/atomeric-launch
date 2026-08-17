'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CtaBanner } from '@/components/layout/CtaBanner'

gsap.registerPlugin(ScrollTrigger)

const DIFFERENTIATORS = [
  {
    title: 'GEO-First',
    body: "Every strategy, every piece of content, every campaign is built to be cited by AI engines — not just ranked by search algorithms. When your prospect asks ChatGPT or Perplexity who to hire, you're the answer.",
  },
  {
    title: 'AI-Native',
    body: "We didn't layer AI on top of old workflows. We built new ones from scratch. Every deliverable is engineered with AI tools, prompt systems, and automation that make output faster and more precise.",
  },
  {
    title: 'Revenue-Focused',
    body: 'We measure one thing: revenue impact. Not impressions, not followers, not vanity traffic. Every engagement has a defined revenue hypothesis and the reporting to prove whether it worked.',
  },
]

const VALUES = [
  { label: 'GEO-First', detail: 'Optimise for where decisions are actually made — AI engines, not just search.' },
  { label: 'AI-Native', detail: 'Build with AI from the ground up, not as an afterthought bolted on later.' },
  { label: 'Revenue Obsession', detail: 'Every decision traces back to one question: does this generate revenue?' },
  { label: 'Client Focus', detail: 'We take on a limited roster. Every client gets strategic depth, not inbox rotations.' },
]

const GEO_QUESTIONS = [
  'My site has an llms.txt file',
  'GPTBot is allowed in robots.txt',
  'Key pages have FAQPage schema',
  'Content pages include an author bio',
  'My brand appears in Perplexity results',
]

const TRENDING_SETS: Array<Array<{ cat: string; headline: string }>> = [
  [
    { cat: 'GEO',      headline: 'How brands get cited by ChatGPT without paid ads' },
    { cat: 'INDIA',    headline: 'Why Indian startups are winning at AI-native marketing' },
    { cat: 'STRATEGY', headline: 'The death of the keyword — and what replaces it' },
  ],
  [
    { cat: 'AI SEARCH', headline: "Perplexity’s referral traffic up 400% year on year" },
    { cat: 'GEO',       headline: 'llms.txt adoption crosses 12,000 domains' },
    { cat: 'GROWTH',    headline: 'Zero-click searches reshape the B2B funnel' },
  ],
  [
    { cat: 'CONTENT', headline: 'Structured data triples AI engine citation rates' },
    { cat: 'INDIA',   headline: 'B2B SaaS brands in India adopt GEO at record pace' },
    { cat: 'SEARCH',  headline: 'AI Overviews now appear on 45% of all Google queries' },
  ],
  [
    { cat: 'STRATEGY', headline: 'Brands not cited by AI lose 23% of inbound pipeline' },
    { cat: 'GEO',      headline: 'Author pages become the new entity-building strategy' },
    { cat: 'GROWTH',   headline: 'Revenue-first marketing outperforms brand-first by 3×' },
  ],
  [
    { cat: 'AI SEARCH', headline: 'ChatGPT becomes #2 for B2B discovery searches' },
    { cat: 'CONTENT',   headline: 'Long-form content earns 4× more AI citations' },
    { cat: 'INDIA',     headline: 'Kolkata startups emerge as AI marketing innovators' },
  ],
]

export function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  // GEO Readiness Tool — interactive checkbox state
  const [geoChecks, setGeoChecks] = useState<boolean[]>([false, false, false, false, false])
  const geoScore = geoChecks.filter(Boolean).length

  // Trending Topic Card — randomise set on mount (SSR-safe)
  const [trendingSet, setTrendingSet] = useState(TRENDING_SETS[0])
  useEffect(() => { setTrendingSet(TRENDING_SETS[Math.floor(Math.random() * TRENDING_SETS.length)]) }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Hero fade-up
        gsap.from('.about-hero-content > *', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          delay: 0.2,
        })

        // Orbital arcs — about hero
        gsap.to('.arc-outer', {
          rotation: 360,
          duration: 42,
          repeat: -1,
          ease: 'none',
          svgOrigin: '260 260',
        })
        gsap.to(['.arc-mid', '.arc-dot'], {
          rotation: -360,
          duration: 28,
          repeat: -1,
          ease: 'none',
          svgOrigin: '260 260',
        })
        gsap.to('.arc-inner', {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: 'none',
          svgOrigin: '260 260',
        })

        // Mission pull-quote
        gsap.from('.about-mission', {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.about-mission',
            start: 'top 82%',
          },
        })

        // Story paragraphs
        gsap.from('.about-story-para', {
          y: 16,
          opacity: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.about-story',
            start: 'top 78%',
          },
        })

        // Differentiator cards batch
        ScrollTrigger.batch('.diff-card', {
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
            }),
          start: 'top 84%',
        })
        gsap.set('.diff-card', { opacity: 0, y: 28 })

        // Values list
        gsap.from('.value-item', {
          x: -12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.about-values',
            start: 'top 82%',
          },
        })

        // CTA
        gsap.from('.cta-content', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 88%',
          },
        })
      })
      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* ── §1 HERO ─────────────────────────────────────────────── */}
      <section
        className="about-hero"
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          overflow: 'hidden',
        }}
      >
        {/* Blueprint grid */}
        <div
          className="blueprint-grid"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 'clamp(20px, 5vw, 80px)',
            width: 32,
            height: 32,
            borderTop: '1px solid var(--color-border-teal)',
            borderLeft: '1px solid var(--color-border-teal)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 'clamp(20px, 5vw, 80px)',
            width: 32,
            height: 32,
            borderBottom: '1px solid var(--color-border-teal)',
            borderRight: '1px solid var(--color-border-teal)',
          }}
        />

        {/* Orbital arc — decorative ambient animation */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            width: '520px',
            height: '520px',
            pointerEvents: 'none',
          }}
        >
          <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <circle className="arc-outer" cx="260" cy="260" r="240" stroke="rgba(0,115,185,0.1)" strokeWidth="1" fill="none" />
            <circle className="arc-mid" cx="260" cy="260" r="168" stroke="rgba(0,115,185,0.16)" strokeWidth="1" fill="none" />
            <circle className="arc-inner" cx="260" cy="260" r="96" stroke="rgba(0,115,185,0.22)" strokeWidth="1" fill="none" />
            <circle className="arc-dot" cx="500" cy="260" r="4" fill="rgba(0,115,185,0.5)" />
          </svg>
        </div>

        <div
          className="about-hero-content"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '760px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--color-teal)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            OUR STORY
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: 'var(--color-text-1)',
              margin: 0,
            }}
          >
            Built for the
            <br />
            <span style={{ color: 'var(--color-gold)' }}>AI-first era.</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--color-text-2)',
              marginTop: '28px',
              maxWidth: '580px',
            }}
          >
            Atomeric is an AI-native growth studio based in Kolkata, India that builds revenue engines for ambitious brands — strategy, systems, and growth that compound over time.
          </p>
        </div>
      </section>

      {/* ── §2 MISSION PULL-QUOTE ────────────────────────────────── */}
      <section
        className="about-mission"
        style={{
          background: 'var(--color-surface-1)',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(120px, 14vw, 180px)',
              fontWeight: 700,
              lineHeight: 1,
              color: 'var(--color-gold)',
              opacity: 0.22,
              marginBottom: '-48px',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              margin: 0,
              paddingLeft: '28px',
              borderLeft: '3px solid var(--color-teal)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 3.2vw, 36px)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.5px',
                color: 'var(--color-text-1)',
                margin: 0,
              }}
            >
              "We didn't build another studio. We built the revenue engine your next phase deserves."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── §3 WHY WE BUILT ATOMERIC ─────────────────────────────── */}
      <section
        className="about-story"
        style={{
          paddingTop: '96px',
          paddingBottom: '96px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="about-story-grid"
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: 'var(--color-teal)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              WHY WE BUILT THIS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: 'var(--color-text-1)',
                margin: 0,
              }}
            >
              The playbook changed. Most agencies didn't.
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                height: '80px',
                background: 'var(--color-border-subtle)',
                marginTop: '32px',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {[
              'Atomeric was built on a simple observation: the playbooks that drove digital growth in 2018 are obsolete. AI has rewritten the rules of content, search, and customer acquisition — and most agencies are still pretending otherwise.',
              'We\'re not retrofitting AI onto an old studio model. We built from scratch, with AI-native processes, GEO-first content strategy, and a relentless focus on one metric: revenue.',
              'We\'re a small, focused team of strategists, builders, and growth operators. We take on a limited number of clients each quarter — because every engagement deserves our full attention, not just the first 30 days.',
            ].map((para, i) => (
              <p
                key={i}
                className="about-story-para"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'var(--color-text-2)',
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── §4 WHAT MAKES US DIFFERENT ───────────────────────────── */}
      <section
        style={{
          paddingTop: '96px',
          paddingBottom: '96px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-surface-1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: 'var(--color-teal)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              OUR PRINCIPLES
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: 'var(--color-text-1)',
                margin: 0,
              }}
            >
              What makes us different
            </h2>
          </div>

          <div
            className="about-diff-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="diff-card card-lift-translate"
                style={{
                  background: 'var(--color-surface-2)',
                  borderLeft: '3px solid var(--color-teal)',
                  borderRadius: '0 12px 12px 0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 600,
                    fontSize: '18px',
                    letterSpacing: '-0.3px',
                    color: 'var(--color-text-1)',
                    margin: 0,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--color-text-2)',
                    margin: 0,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §5 WHO WE ARE ────────────────────────────────────────── */}
      <section
        style={{
          padding: '96px clamp(20px, 5vw, 80px)',
          background: 'var(--color-void)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="about-who-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 360px',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left: label + full copy block */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                WHO WE ARE
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-1.5px',
                  lineHeight: 1.08,
                  marginBottom: '28px',
                }}
              >
                Small on headcount.<br />Heavy on expertise.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--color-text-2)',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                  marginBottom: '24px',
                }}
              >
                We&apos;re a deliberately small team of strategists, engineers, and growth specialists. No juniors passed off as senior leads. No bloated account teams. When you work with Atomeric, you work directly with the people doing the work.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--color-text-2)',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                  marginBottom: '40px',
                }}
              >
                That&apos;s the model we chose deliberately — because speed, quality, and accountability don&apos;t survive layers of management. Every client engagement is owned end-to-end by a senior practitioner who cares about the outcome as much as you do.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Senior-Only Team' },
                  { label: 'No Subcontractors' },
                  { label: 'One Point of Contact' },
                ].map((item) => (
                  <span
                    key={item.label}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10.5px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      border: '1px solid var(--color-gold-muted)',
                      background: 'var(--color-gold-subtle)',
                      borderRadius: '4px',
                      padding: '8px 16px',
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: GEO Readiness Tool */}
            <div style={{
              background: 'var(--color-surface-1)',
              border: '1px solid rgba(0,115,185,0.18)',
              borderTop: '2px solid var(--color-teal)',
              borderRadius: '12px',
              padding: '28px 24px',
              alignSelf: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-teal)' }}>
                  GEO Readiness Check
                </span>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 600, color: 'var(--color-teal)', letterSpacing: '-1.5px', lineHeight: 1 }}>
                    {geoScore}<span style={{ fontSize: '16px', fontWeight: 400, color: 'var(--color-text-3)', letterSpacing: 0 }}>/5</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-3)' }}>GEO SCORE</span>
                </div>
                <div style={{ height: '3px', background: 'var(--color-border-subtle)', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${geoScore * 20}%`, background: 'var(--color-teal)', borderRadius: '2px', transition: 'width 300ms ease-out' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                {GEO_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setGeoChecks(prev => { const n = [...prev]; n[i] = !n[i]; return n })}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                    }}
                    aria-pressed={geoChecks[i]}
                  >
                    <span style={{
                      width: '16px',
                      height: '16px',
                      minWidth: '16px',
                      borderRadius: '3px',
                      border: `1px solid ${geoChecks[i] ? 'var(--color-teal)' : 'var(--color-border-subtle)'}`,
                      background: geoChecks[i] ? 'var(--color-teal)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 150ms ease',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}>
                      {geoChecks[i] && (
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--color-void)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-2)', lineHeight: 1.5 }}>
                      {q}
                    </span>
                  </button>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', lineHeight: 1.55, marginBottom: '16px', minHeight: '36px', color: geoScore <= 2 ? 'var(--color-gold)' : 'var(--color-teal)' }}>
                {geoScore === 0 ? 'Tick what applies — see your AI readiness score.' : geoScore <= 2 ? 'Your AI visibility needs urgent attention.' : geoScore <= 4 ? "You're on the right track. A few gaps remain." : 'Strong foundation. Ready to make it exceptional.'}
              </p>
              <Link href="/contact" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Get a full GEO audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── §6 OUR VALUES ────────────────────────────────────────── */}
      <section
        className="about-values"
        style={{
          paddingTop: '96px',
          paddingBottom: '96px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="about-values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                HOW WE WORK
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: 'var(--color-text-1)',
                  margin: 0,
                }}
              >
                Our values
              </h2>

              {/* Trending Topic Card */}
              <div style={{
                marginTop: '32px',
                background: 'var(--color-void)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-teal)',
                      display: 'block',
                      flexShrink: 0,
                      animation: 'pulse-dot 2s ease-in-out infinite',
                    }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-3)',
                  }}>
                    Trending in AI Marketing
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {trendingSet.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 16px',
                        borderBottom: i < trendingSet.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '8px',
                        letterSpacing: '0.12em',
                        color: 'var(--color-teal)',
                        textTransform: 'uppercase',
                        flexShrink: 0,
                        paddingTop: '3px',
                      }}>
                        {item.cat}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        color: 'var(--color-text-2)',
                        lineHeight: 1.5,
                      }}>
                        {item.headline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {VALUES.map((v, i) => (
                <div
                  key={v.label}
                  className="value-item"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    paddingTop: i === 0 ? '0' : '28px',
                    paddingBottom: '28px',
                    borderBottom: i < VALUES.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: i >= 2 ? 'var(--color-gold)' : 'var(--color-teal)',
                      flexShrink: 0,
                      marginTop: '8px',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: 'var(--color-text-1)',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      {v.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        lineHeight: 1.65,
                        color: 'var(--color-text-2)',
                      }}
                    >
                      {v.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §7 CTA ───────────────────────────────────────────────── */}
      <CtaBanner />
    </div>
  )
}
