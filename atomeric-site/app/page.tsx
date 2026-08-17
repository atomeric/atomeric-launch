'use client'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CtaBanner } from '@/components/layout/CtaBanner'

gsap.registerPlugin(ScrollTrigger)

// ── Data ──────────────────────────────────────────────────────────────────────

const STRIP_ITEMS = [
  { text: 'Revenue, By Design',                              accent: true  },
  { text: 'AI-Native from Day One',                          accent: false },
  { text: 'Faster Outcomes',                                 accent: false },
  { text: 'No Fluff. Just Results.',                         accent: true  },
  { text: 'The Growth Engine',                               accent: false },
  { text: 'The Transformation Partner',                      accent: false },
  { text: 'Built to Be Found',                               accent: false },
  { text: 'Built to Outperform',                             accent: true  },
  { text: 'The Compounding Effect',                          accent: false },
  { text: 'Think. Build. Scale.',                            accent: false },
  { text: 'The Network Effect',                              accent: false },
  { text: 'Focus on the 20% that drives 80% of outcomes',   accent: true  },
  { text: 'Systems That Keep Selling',                       accent: false },
]

const SERVICES = [
  {
    num: '01',
    tag: 'THINK FIRST',
    title: 'Strategy',
    body: 'Market positioning, competitive analysis, and data-backed roadmaps that define where you win before you spend a dollar on execution.',
    caps: ['Brand Positioning', 'Market Research', 'Content Strategy', 'GEO Planning'],
  },
  {
    num: '02',
    tag: 'SHIP FAST',
    title: 'Build',
    body: 'Websites, platforms, and content systems engineered for speed, conversions, and search visibility — delivered in days, not months.',
    caps: ['Website Design & Dev', 'Landing Pages', 'Content Production', 'Technical SEO'],
  },
  {
    num: '03',
    tag: 'SCALE SMART',
    title: 'Grow',
    body: 'Paid media, organic search, and next-gen search optimization that compounds over time — turning traffic into qualified pipeline.',
    caps: ['GEO & SEO', 'Paid Advertising', 'Email & Automation', 'Social Growth'],
  },
  {
    num: '04',
    tag: 'EVOLVE CONTINUOUSLY',
    title: 'Transform',
    body: 'Ongoing optimization, automation, and data-driven refinement that keeps you six months ahead of competitors and the algorithm.',
    caps: ['Analytics & CRO', 'AI Integration', 'Brand Evolution', 'Growth Audits'],
  },
]

const STEPS = [
  {
    num: '01',
    name: 'Discover',
    desc: "We go deep into your market, competitors, ICP, and current positioning. What's working, what isn't, and where the white space is.",
  },
  {
    num: '02',
    name: 'Strategize',
    desc: 'We build your bespoke playbook: positioning, channel priorities, content pillars, and a 90-day roadmap. You review and sign off before we build a single pixel.',
  },
  {
    num: '03',
    name: 'Build',
    desc: 'We design and engineer every asset — website, content, campaigns, automations — to your brief and brand. Fast execution without cutting corners.',
  },
  {
    num: '04',
    name: 'Launch',
    desc: 'Coordinated deployment across all channels. First impressions happen once — we plan for maximum impact on day one.',
  },
  {
    num: '05',
    name: 'Measure & Scale',
    desc: "We track what matters: pipeline, conversions, compounding growth. No vanity metrics. We double down on what works and cut what doesn't — monthly.",
  },
]

const PRINCIPLES = [
  {
    title: 'AI-Native, Not AI-Adjacent',
    body: 'Most studios bolt new tools onto old thinking. We built our entire process around how modern buyers discover, evaluate, and choose — including how generative search is reshaping the buyer funnel.',
  },
  {
    title: 'GEO Before SEO',
    body: "The next search is a conversation with a machine. We optimize for that — so when buyers ask ChatGPT, Perplexity, or Gemini who solves their problem, your name comes up first.",
  },
  {
    title: 'Revenue, Not Reach',
    body: "We don't celebrate impressions. We're obsessed with pipeline, conversions, and compounding revenue — the only metrics that show up on your P&L. Every deliverable connects to the number.",
  },
]

const METRICS = [
  { value: '48',  unit: 'hrs',    label: 'From brief to strategy, fast',          accent: false },
  { value: '75',  unit: '+',      label: 'Capabilities across 4 disciplines',     accent: false },
  { value: '5',   unit: '-Step',  label: 'Proven growth methodology',             accent: false },
  { value: 'GEO', unit: '-First', label: 'Next-gen search visibility, built-in',    accent: true },
]

const STATS = [
  { stat: '45%',      label: 'of Google searches now show an AI Overview',              source: 'Google, 2026'        },
  { stat: '11×',      label: 'higher conversion from Perplexity vs organic search',     source: 'Industry, 2026'      },
  { stat: '38%',      label: 'of searches end without a click',                          source: 'SparkToro, 2026'     },
  { stat: '+40%',     label: 'AI citation boost from adding stats to content',           source: 'GEO Research, 2026'  },
  { stat: '3×',       label: 'faster growth for AI-native companies',                   source: 'McKinsey, 2026'      },
  { stat: '4.5B+',    label: 'monthly visits to ChatGPT in 2026',                       source: 'SimilarWeb, 2026'    },
  { stat: '2.8×',     label: 'more AI citations for GEO-optimised pages',               source: 'Authoritas, 2026'    },
  { stat: '13',       label: 'content pieces B2B buyers read before contacting a vendor', source: 'Demand Gen, 2026'   },
  { stat: '+23%',     label: 'branded search uplift for AI-cited brands',                source: 'BrightEdge, 2026'   },
  { stat: '72%',      label: 'of buyers use AI search during vendor research',           source: 'Gartner, 2026'       },
  { stat: '−32%', label: 'CAC reduction with AI marketing tools',                   source: 'Forrester, 2026'    },
  { stat: '₹4.5L cr', label: "India’s D2C market size by 2026",               source: 'IBEF, 2026'          },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const stripRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const heroSquareRef = useRef<SVGSVGElement>(null)
  const heroCircleRef = useRef<SVGSVGElement>(null)
  const heroHexRef = useRef<SVGSVGElement>(null)
  const heroCrossRef = useRef<SVGSVGElement>(null)

  // Rotating stat card — randomise on mount (SSR-safe)
  const [statIdx, setStatIdx] = useState(0)
  useEffect(() => { setStatIdx(Math.floor(Math.random() * STATS.length)) }, [])

  // ── Hero floating shapes ──────────────────────────────────────────────────
  useGSAP(() => {
    const sq = heroSquareRef.current
    const ci = heroCircleRef.current
    const hx = heroHexRef.current
    const cx = heroCrossRef.current
    if (!sq || !ci || !hx || !cx) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // ── Float animations ──────────────────────────────────────
      gsap.to(sq, { y: -20, rotation: 8, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to(ci, { y: 15, x: 6, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })
      gsap.to(hx, { y: 12, x: -6, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 })
      gsap.to(cx, { y: 10, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.5 })
      gsap.to(cx, { opacity: 0.55, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })
      // ── Scroll parallax — different Y travel creates perceived Z depth ──
      gsap.to(sq, {
        y: -80,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })
      gsap.to(ci, {
        y: -45,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })
      gsap.to(hx, {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })
      gsap.to(cx, {
        y: -25,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })
    })
    return () => mm.revert()
  }, [])

  // ── Service card 3D tilt on hover ─────────────────────────────────────────
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.service-card'))
      const handlers: Array<{ card: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []
      cards.forEach((card) => {
        const move = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          const rotateX = (-y / rect.height) * 8
          const rotateY = (x / rect.width) * 8
          gsap.to(card, { rotateX, rotateY, duration: 0.4, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', transformPerspective: 800, transformOrigin: 'center center' })
        }
        const leave = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' })
        }
        card.addEventListener('mousemove', move)
        card.addEventListener('mouseleave', leave)
        handlers.push({ card, move, leave })
      })
      return () => {
        handlers.forEach(({ card, move, leave }) => {
          card.removeEventListener('mousemove', move)
          card.removeEventListener('mouseleave', leave)
        })
      }
    })
    return () => mm.revert()
  }, [])

  // ── Principle card cursor effects ─────────────────────────────────────────
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.principle-col'))
      const handlers: Array<{ card: HTMLElement; move: (e: MouseEvent) => void; enter: () => void; leave: () => void }> = []
      cards.forEach((card) => {
        const move = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', x + 'px')
          card.style.setProperty('--mouse-y', y + 'px')
          const rotateX = ((y - rect.height / 2) / rect.height) * -5
          const rotateY = ((x - rect.width / 2) / rect.width) * 5
          gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, duration: 0.4, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', overwrite: 'auto' })
        }
        const enter = () => {
          gsap.to(card, { boxShadow: '0 0 0 1px rgba(0,115,185,0.35), 0 8px 32px rgba(0,115,185,0.08)', duration: 0.3, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' })
        }
        const leave = () => {
          card.style.setProperty('--mouse-x', '50%')
          card.style.setProperty('--mouse-y', '50%')
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', overwrite: 'auto' })
          gsap.to(card, { boxShadow: '0 0 0 0px transparent', duration: 0.5, ease: 'power2.inOut' })
        }
        card.addEventListener('mousemove', move)
        card.addEventListener('mouseenter', enter)
        card.addEventListener('mouseleave', leave)
        handlers.push({ card, move, enter, leave })
      })
      return () => {
        handlers.forEach(({ card, move, enter, leave }) => {
          card.removeEventListener('mousemove', move)
          card.removeEventListener('mouseenter', enter)
          card.removeEventListener('mouseleave', leave)
        })
      }
    })
    return () => mm.revert()
  }, [])

  // ── Strip marquee animation ───────────────────────────────────────────────
  useGSAP(() => {
    const strip = stripRef.current
    if (!strip) return
    const track = strip.querySelector('.strip-track') as HTMLElement | null
    if (!track) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      tweenRef.current = gsap.to(track, {
        x: () => -(track.scrollWidth / 2),
        duration: 38,
        ease: 'none',
        repeat: -1,
        invalidateOnRefresh: true,
      })

      const pauseStrip = () =>
        gsap.to(tweenRef.current, { timeScale: 0, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' })
      const resumeStrip = () =>
        gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: 'power2.inOut' })

      strip.addEventListener('mouseenter', pauseStrip)
      strip.addEventListener('mouseleave', resumeStrip)

      return () => {
        strip.removeEventListener('mouseenter', pauseStrip)
        strip.removeEventListener('mouseleave', resumeStrip)
      }
    })

    return () => mm.revert()
  }, { scope: stripRef })

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
    // ── 1. Hero entrance (staggered after loader)
    const tl = gsap.timeline({ delay: 0.9 })
    // Entrance on wrapper — inner logo scrub has a clean starting state
    tl.from('.hero-logo-wrap', {
      opacity: 0,
      y: -20,
      duration: 1.2,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    })
    .from('.hero-connector', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 0.5,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    }, '-=0.7')
    .from('.hero-body', {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    }, '-=0.5')
    .from('.hero-ctas > *', {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.4,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    }, '-=0.3')
    .from('.hero-scroll-cue', {
      opacity: 0,
      duration: 0.5,
    }, '-=0.1')

    // Pin transform-origin so it's set before scrub starts (not animated)
    gsap.set('.hero-logo-big', { transformOrigin: 'top center' })

    // ── 2. Big logo: scrub — inner element only, no entrance conflict
    gsap.to('.hero-logo-big', {
      y: -380,
      scale: 0.1,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    // ── 3. Hero body: fades out faster (done by 40% scroll through hero)
    gsap.to('.hero-body-wrap', {
      opacity: 0,
      y: -64,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '40% top',
        scrub: 0.4,
      },
    })

    // ── 4. Scroll cue: fades out very early
    gsap.to('.hero-scroll-cue', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '15% top',
        scrub: 0.3,
      },
    })

    // ── 5. Section headers reveal
    ScrollTrigger.batch('.section-header-el', {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        ),
      start: 'top 88%',
      once: true,
    })

    // ── 6. Service cards reveal
    ScrollTrigger.batch('.service-card', {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 36, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        ),
      start: 'top 86%',
      once: true,
    })

    // ── 7. Process line scrub
    gsap.to('.process-line-fill', {
      scaleY: 1,
      transformOrigin: 'top center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.process-section',
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1.5,
      },
    })

    // ── 8. Process steps stagger
    ScrollTrigger.batch('.process-step', {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, stagger: 0.13, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        ),
      start: 'top 82%',
      once: true,
    })

    // ── 9. Principle columns
    ScrollTrigger.batch('.principle-col', {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.65, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        ),
      start: 'top 86%',
      once: true,
    })

    // ── 10. Metric counters
    function animateCounter(selector: string, target: number) {
      const el = document.querySelector(selector) as HTMLElement | null
      if (!el) return
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        onUpdate() { el.textContent = String(Math.round(obj.val)) },
      })
    }
    ScrollTrigger.create({
      trigger: '.metrics-section',
      start: 'top 72%',
      once: true,
      onEnter: () => {
        animateCounter('.stat-48', 48)
        animateCounter('.stat-75', 75)
      },
    })

    // ── 11. Metric cards reveal
    ScrollTrigger.batch('.metric-card', {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        ),
      start: 'top 80%',
      once: true,
    })

    })
    return () => mm.revert()
  }, [])

  return (
    <main id="main-content">
      {/* ════════════════════════════════════════════════════════
          §1  HERO — Full viewport, centered atomeric wordmark
          ════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          background: 'var(--color-void)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Blueprint grid */}
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

        {/* Ambient glow behind the wordmark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '860px',
            height: '480px',
            background: 'radial-gradient(ellipse, rgba(0,115,185,0.07) 0%, transparent 68%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Gold glow accent */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '36%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(0,115,185,0.04) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Floating geometric shapes — desktop only, decorative */}
        <svg
          ref={heroSquareRef}
          aria-hidden="true"
          className="hero-geo-shape"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          fill="none"
          style={{ position: 'absolute', right: 'clamp(40px, 8vw, 120px)', top: '20%', zIndex: 0, pointerEvents: 'none' }}
        >
          <rect x="30" y="30" width="140" height="140" stroke="rgba(0,115,185,0.20)" strokeWidth="1" transform="rotate(45 100 100)" />
        </svg>
        <svg
          ref={heroCircleRef}
          aria-hidden="true"
          className="hero-geo-shape"
          viewBox="0 0 120 120"
          width="120"
          height="120"
          fill="none"
          style={{ position: 'absolute', right: 'clamp(80px, 12vw, 200px)', top: '55%', zIndex: 0, pointerEvents: 'none' }}
        >
          <circle cx="60" cy="60" r="59" stroke="rgba(0,115,185,0.17)" strokeWidth="1" />
        </svg>
        <svg
          ref={heroHexRef}
          aria-hidden="true"
          className="hero-geo-shape"
          viewBox="0 0 160 160"
          width="160"
          height="160"
          fill="none"
          style={{ position: 'absolute', left: 'clamp(40px, 6vw, 100px)', top: '30%', zIndex: 0, pointerEvents: 'none' }}
        >
          <polygon points="80,10 150.6,45 150.6,115 80,150 9.4,115 9.4,45" stroke="rgba(0,115,185,0.14)" strokeWidth="1" />
        </svg>
        <svg
          ref={heroCrossRef}
          aria-hidden="true"
          className="hero-geo-shape"
          viewBox="0 0 60 60"
          width="60"
          height="60"
          fill="none"
          style={{ position: 'absolute', left: 'clamp(60px, 10vw, 160px)', top: '65%', zIndex: 0, pointerEvents: 'none' }}
        >
          <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <circle cx="30" cy="30" r="3" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="2" y1="2" x2="8" y2="2" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="2" y1="2" x2="2" y2="8" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="58" y1="2" x2="52" y2="2" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="58" y1="2" x2="58" y2="8" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="2" y1="58" x2="8" y2="58" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="2" y1="58" x2="2" y2="52" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="58" y1="58" x2="52" y2="58" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
          <line x1="58" y1="58" x2="58" y2="52" stroke="rgba(0,115,185,0.18)" strokeWidth="1" />
        </svg>

        {/* Main centered content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 clamp(20px, 5vw, 80px)',
            maxWidth: '960px',
            width: '100%',
          }}
        >
          {/* ★ THE BIG ATOMERIC WORDMARK — wrapper receives entrance anim, inner receives scrub */}
          <div className="hero-logo-wrap" style={{ marginBottom: '8px' }}>
            <h1
              className="hero-logo-big"
              aria-label="Atomeric — AI Growth Studio India"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 600,
                fontSize: 'clamp(60px, 14vw, 180px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                willChange: 'transform, opacity',
                userSelect: 'none',
              }}
            >
              <span style={{ color: 'var(--color-text-1)' }}>atom</span>
              <span style={{ color: 'var(--color-teal)' }}>eric</span>
            </h1>
          </div>

          {/* Hero body — fades out on scroll (includes connector) */}
          <div className="hero-body-wrap">
          {/* Vertical teal connector */}
          <div
            className="hero-connector"
            aria-hidden="true"
            style={{
              width: '1px',
              height: '44px',
              background: 'linear-gradient(to bottom, rgba(0,115,185,0.5), transparent)',
              margin: '0 auto 20px',
            }}
          />
            <div className="hero-body">
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  marginBottom: '28px',
                }}
              >
                Built to Grow. Designed to Convert.
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-2px',
                  lineHeight: 1.02,
                  marginBottom: '24px',
                }}
              >
                Revenue Growth,<br />Engineered.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(15px, 1.8vw, 19px)',
                  color: 'var(--color-text-2)',
                  maxWidth: '520px',
                  lineHeight: 1.65,
                  margin: '0 auto 44px',
                }}
              >
                Most brands struggle to get noticed by the buyers that matter. We change that with sharper positioning, faster execution, and generative engine optimization — growth systems built to compound.
              </p>

              <div
                className="hero-ctas"
                style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
                  See Where You're Losing Revenue
                </Link>
                <Link href="/process" className="btn-ghost" style={{ padding: '14px 32px', fontSize: '15px' }}>
                  See How It Works →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-scroll-cue"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              color: 'var(--color-text-3)',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <div className="scroll-pulse-line" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §2  TRUST STRIP — premium GSAP marquee
          ════════════════════════════════════════════════════════ */}
      <div
        ref={stripRef}
        role="marquee"
        aria-label="Atomeric capabilities"
        className="strip-fade-wrap"
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-teal-dim)',
          borderBottom: '1px solid var(--color-teal-dim)',
          padding: '14px 0',
          overflow: 'hidden',
        }}
      >
        <div className="strip-track" style={{ display: 'flex', alignItems: 'center', willChange: 'transform', flexWrap: 'nowrap', width: 'max-content' }}>
          {/* Original set — visible to screen readers */}
          {STRIP_ITEMS.map((item, i) => (
            <span key={i} className="strip-item" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: item.accent ? 'var(--color-teal)' : 'var(--color-text-2)',
                  fontWeight: item.accent ? 500 : 400,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.text}
              </span>
              <span aria-hidden="true" style={{ color: 'var(--color-border-teal)', fontSize: '9px', paddingLeft: '20px' }}>✦</span>
            </span>
          ))}
          {/* Cloned set — hidden from screen readers, hidden in reduced motion */}
          <span className="strip-clone" aria-hidden="true">
            {STRIP_ITEMS.map((item, i) => (
              <span key={`c-${i}`} className="strip-item" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: item.accent ? 'var(--color-teal)' : 'var(--color-text-2)',
                    fontWeight: item.accent ? 500 : 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.text}
                </span>
                <span aria-hidden="true" style={{ color: 'var(--color-border-teal)', fontSize: '9px', paddingLeft: '20px' }}>✦</span>
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          §3  WHAT WE DO — Services
          ════════════════════════════════════════════════════════ */}
      <section id="services" aria-label="Services" style={{ padding: '128px clamp(20px, 5vw, 80px)', background: 'var(--color-void)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section header — 2-column: copy left, rotating stat card right */}
          <div
            className="services-header-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '80px', alignItems: 'center', marginBottom: '72px' }}
          >
            <div>
              <span
                className="section-header-el"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  marginBottom: '20px',
                }}
              >
                WHERE WE WORK
              </span>
              <h2
                className="section-header-el"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-2px',
                  lineHeight: 1.05,
                  marginBottom: '16px',
                }}
              >
                Your competitors are moving faster.<br />Here&apos;s how we close that gap.
              </h2>
              <p
                className="section-header-el"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  color: 'var(--color-text-2)',
                  lineHeight: 1.7,
                }}
              >
                Most brands choose between speed and quality. You shouldn&apos;t have to. Pick one growth track — or run all four.
              </p>
              <Link href="/services" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-teal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '16px',
              }}>
                Explore all services →
              </Link>
            </div>

            {/* Rotating AI Marketing Stat Card */}
            <div
              className="section-header-el"
              style={{
                background: 'var(--color-surface-1)',
                border: '1px solid var(--color-border-subtle)',
                borderTop: '2px solid var(--color-teal)',
                borderRadius: '12px',
                padding: '32px 28px',
                boxShadow: '0 4px 40px rgba(0,115,185,0.06)',
              }}
            >
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-text-3)',
                marginBottom: '20px',
              }}>
                AI MARKETING · 2026
              </span>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(44px, 5vw, 60px)',
                fontWeight: 600,
                color: 'var(--color-teal)',
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: '14px',
              }}>
                {STATS[statIdx].stat}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-text-2)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}>
                {STATS[statIdx].label}
              </p>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--color-text-3)',
                textTransform: 'uppercase',
              }}>
                — {STATS[statIdx].source}
              </span>
            </div>
          </div>

          {/* 2×2 grid */}
          <div
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              perspective: '800px',
            }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="service-card"
                style={{
                  position: 'relative',
                  background: 'var(--color-surface-1)',
                  border: '1px solid var(--color-border-subtle)',
                  borderTop: (s.num === '01' || s.num === '04') ? '2px solid var(--color-gold)' : '2px solid var(--color-teal-border)',
                  borderRadius: '12px',
                  padding: '36px 32px 32px',
                  overflow: 'hidden',
                }}
              >
                {/* Corner number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.num}
                </span>

                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9.5px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--color-teal)',
                    background: 'var(--color-accent-muted)',
                    border: '1px solid var(--color-border-teal)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    marginBottom: '20px',
                  }}
                >
                  {s.tag}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--color-text-1)',
                    letterSpacing: '-1px',
                    marginBottom: '12px',
                    lineHeight: 1.15,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-text-2)',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                  }}
                >
                  {s.body}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.caps.map((cap) => (
                    <span
                      key={cap}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11.5px',
                        color: 'var(--color-text-3)',
                        background: 'var(--color-surface-1)',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §4  HOW WE WORK — Process
          ════════════════════════════════════════════════════════ */}
      <section
        id="process"
        aria-label="Our process"
        className="process-section"
        style={{
          padding: '128px clamp(20px, 5vw, 80px)',
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="process-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: header — sticky */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <span
                className="section-header-el"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '20px',
                }}
              >
                HOW WE WORK
              </span>
              <h2
                className="section-header-el"
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
                No black box. No surprises.<br />Just a system that works.
              </h2>
              <p
                className="section-header-el"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--color-text-2)',
                  lineHeight: 1.7,
                  maxWidth: '380px',
                }}
              >
                You&apos;ve worked with teams who vanished after onboarding. We operate differently — every step is visible, every deliverable is yours.
              </p>
              <Link href="/process" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-teal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '16px',
              }}>
                See the full methodology →
              </Link>
            </div>

            {/* Right: timeline */}
            <div style={{ position: 'relative' }}>
              {/* Track */}
              <div
                style={{
                  position: 'absolute',
                  left: '19px',
                  top: '20px',
                  bottom: '20px',
                  width: '1px',
                  background: 'var(--color-border-subtle)',
                }}
              />
              {/* Animated fill */}
              <div
                className="process-line-fill"
                style={{
                  position: 'absolute',
                  left: '19px',
                  top: '20px',
                  bottom: '20px',
                  width: '1px',
                  background: 'linear-gradient(to bottom, var(--color-teal), rgba(0,115,185,0.15))',
                  transform: 'scaleY(0)',
                  transformOrigin: 'top center',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
                {STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="process-step"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '40px 1fr',
                      gap: '36px',
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-teal-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--color-teal)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.num}
                    </div>
                    <div style={{ paddingTop: '8px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '22px',
                          fontWeight: 700,
                          color: 'var(--color-text-1)',
                          letterSpacing: '-0.5px',
                          lineHeight: 1.2,
                          marginBottom: '10px',
                        }}
                      >
                        {step.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'var(--color-text-2)',
                          lineHeight: 1.75,
                          maxWidth: '480px',
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §5  WHY ATOMERIC — Principles
          ════════════════════════════════════════════════════════ */}
      <section
        id="about"
        aria-label="Why Atomeric"
        style={{ padding: '128px clamp(20px, 5vw, 80px)', background: 'var(--color-void)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '72px' }}>
            <span
              className="section-header-el"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-teal)',
                marginBottom: '20px',
              }}
            >
              WHY ATOMERIC
            </span>
            <h2
              className="section-header-el"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '-2px',
                lineHeight: 1.05,
              }}
            >
              Different by design.
            </h2>
          </div>

          <div
            className="principles-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--color-border-subtle)',
              borderRadius: '12px',
              overflow: 'hidden',
              perspective: '1000px',
            }}
          >
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="principle-col card-lift"
                style={{
                  padding: '40px 32px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--color-border-teal)',
                    letterSpacing: '0.1em',
                    marginBottom: '20px',
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    width: '28px',
                    height: '2px',
                    background: 'var(--color-teal)',
                    marginBottom: '20px',
                    borderRadius: '1px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--color-text-1)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.25,
                    marginBottom: '16px',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-text-2)',
                    lineHeight: 1.75,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          §6  METRICS
          ════════════════════════════════════════════════════════ */}
      <section
        className="metrics-section"
        aria-label="Key metrics"
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid rgba(0,115,185,0.14)',
          borderBottom: '1px solid rgba(0,115,185,0.14)',
          padding: '88px clamp(20px, 5vw, 80px)',
        }}
      >
        <div
          className="metrics-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(0,115,185,0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
            alignItems: 'stretch',
          }}
        >
          {METRICS.map((m) => (
            <div
              key={m.value}
              className="metric-card"
              style={{
                background: 'var(--color-void)',
                padding: '40px 32px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '12px',
                borderTop: '2px solid rgba(0,115,185,0.18)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px', whiteSpace: 'nowrap' }}>
                <span
                  className={
                    m.value === '48' ? 'stat-48' :
                    m.value === '75' ? 'stat-75' : undefined
                  }
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: m.value === 'GEO' ? 'clamp(36px, 4vw, 52px)' : 'clamp(44px, 5vw, 64px)',
                    fontWeight: 600,
                    letterSpacing: '-2px',
                    lineHeight: 1,
                    color: 'var(--color-gold)',
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 400,
                    letterSpacing: '-0.5px',
                    color: 'rgba(0,115,185,0.65)',
                  }}
                >
                  {m.unit}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  color: 'var(--color-text-3)',
                  lineHeight: 1.5,
                  marginTop: '4px',
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* §7 CTA BANNER */}
      <CtaBanner />
    </main>
  )
}
