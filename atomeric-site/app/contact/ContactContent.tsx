'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { sendContactEmail } from '@/app/actions/contact'
import { contactSchema, type ContactFormValues } from './schema'

gsap.registerPlugin()

const TRACK_OPTIONS = ['Strategy', 'Build', 'Grow', 'Transform', "I'm not sure yet"]
const BUDGET_OPTIONS = [
  'Under ₹75,000',
  '₹75,000 – ₹1,50,000',
  '₹1,50,000 – ₹3,00,000',
  '₹3,00,000+',
  'Not sure yet',
]

const NEXT_STEPS = [
  {
    num: '01',
    title: 'We read your message',
    body: 'Every submission is reviewed personally — no auto-responders, no CRM hand-offs.',
  },
  {
    num: '02',
    title: 'We prepare',
    body: 'We look into your business before we meet, so the call is specific to your situation.',
  },
  {
    num: '03',
    title: 'We meet',
    body: '30 minutes to understand your goals and share our honest assessment. No pitch, no pressure.',
  },
]

const FAQS = [
  {
    q: 'Is the strategy call actually free?',
    a: 'Yes. 30 minutes, zero agenda beyond understanding your situation. We figure out together whether we are the right fit — and we will tell you honestly if we are not.',
  },
  {
    q: 'What if we are not ready to start yet?',
    a: 'Come anyway. We will tell you honestly whether now is the right time and exactly what to do to be ready. Most people leave with a clearer picture even if nothing is signed.',
  },
  {
    q: 'How quickly can we get started if we decide to work together?',
    a: 'Most clients are fully onboarded within 48 hours of signing. Strategy discovery kicks off the same week.',
  },
]

const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'

export function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string>('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  // Merge RHF's onBlur with focus-state tracker to avoid TS2783 duplicate-prop error
  const field = <K extends keyof ContactFormValues>(name: K) => {
    const { onBlur, ...rest } = register(name)
    return {
      ...rest,
      onFocus: () => setFocusedField(name as string),
      onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onBlur(e as React.FocusEvent<HTMLInputElement>)
        setFocusedField(null)
      },
    }
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.contact-hero-content > *', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: EASE,
          delay: 0.15,
        })
        gsap.from('.contact-form-col', {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: EASE,
          delay: 0.3,
        })
        gsap.from('.contact-info-col', {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: EASE,
          delay: 0.45,
        })
      })
    },
    { scope: containerRef }
  )

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus('loading')
    setServerError('')
    const result = await sendContactEmail(data)
    if (result.success) {
      setSubmitStatus('success')
      reset()
    } else {
      setSubmitStatus('error')
      setServerError(result.error ?? 'Something went wrong.')
    }
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'var(--color-surface-1)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-text-1)',
    outline: 'none',
    transition: 'border-color 160ms ease-out, box-shadow 160ms ease-out',
    boxSizing: 'border-box',
  }

  const inputFocused: React.CSSProperties = {
    borderColor: 'var(--color-teal)',
    boxShadow: '0 0 0 1px var(--color-teal)',
  }

  const inputError: React.CSSProperties = {
    borderColor: '#EF4444',
  }

  const getInputStyle = (name: keyof ContactFormValues): React.CSSProperties => ({
    ...inputBase,
    ...(focusedField === name ? inputFocused : {}),
    ...(errors[name] ? inputError : {}),
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--color-teal)',
    marginBottom: '8px',
  }

  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: '#EF4444',
    marginTop: '6px',
  }

  const fieldWrap: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div ref={containerRef}>

      {/* ── §1 HERO ─────────────────────────────────────────────── */}
      <section
        aria-label="Contact page hero"
        className="contact-hero"
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          overflow: 'hidden',
        }}
      >
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 40, left: 'clamp(20px,5vw,80px)', width: 32, height: 32, borderTop: '1px solid rgba(0,115,185,0.2)', borderLeft: '1px solid rgba(0,115,185,0.2)' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 'clamp(20px,5vw,80px)', width: 32, height: 32, borderBottom: '1px solid rgba(0,115,185,0.2)', borderRight: '1px solid rgba(0,115,185,0.2)' }} />

        <div className="contact-hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: 'var(--color-teal)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
            LET&apos;S TALK
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--color-text-1)', margin: 0 }}>
            Let&apos;s talk revenue.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.65, color: 'var(--color-text-2)', marginTop: '20px', maxWidth: '520px' }}>
            Book a free 30-minute strategy call. No pitch, no pressure — just an honest look at where you want to go.
          </p>
        </div>
      </section>

      {/* ── §2 TWO-COLUMN LAYOUT ────────────────────────────────── */}
      <section
        aria-label="Contact form and information"
        style={{
          paddingTop: '64px',
          paddingBottom: '96px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
        }}
      >
        <div
          className="contact-layout"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT: Form ── */}
          <div className="contact-form-col">
            {submitStatus === 'success' ? (
              <div
                role="alert"
                style={{
                  background: 'rgba(0,115,185,0.06)',
                  border: '1px solid rgba(0,115,185,0.2)',
                  borderRadius: '12px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'center',
                }}
              >
                {/* Teal checkmark */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="23" stroke="#0073b9" strokeWidth="1.5" />
                  <path d="M15 24.5L21 30.5L33 18" stroke="#0073b9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--color-text-1)', margin: 0, letterSpacing: '-0.5px' }}>
                  Message received.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-2)', margin: 0, lineHeight: 1.6 }}>
                  We&apos;ll be in touch within 48 hours. Usually much faster.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                role="form"
                aria-label="Contact Atomeric"
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                {/* Name + Company row */}
                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      style={getInputStyle('name')}
                      {...field('name')}
                    />
                    {errors.name && <span role="alert" style={errorStyle}>{errors.name.message}</span>}
                  </div>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-company" style={labelStyle}>Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                      style={getInputStyle('company')}
                      {...field('company')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={fieldWrap}>
                  <label htmlFor="contact-email" style={labelStyle}>Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="hello@yourcompany.com"
                    autoComplete="email"
                    style={getInputStyle('email')}
                    {...field('email')}
                  />
                  {errors.email && <span role="alert" style={errorStyle}>{errors.email.message}</span>}
                </div>

                {/* Track + Budget row */}
                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-track" style={labelStyle}>Service Track *</label>
                    <select
                      id="contact-track"
                      style={{ ...getInputStyle('track'), appearance: 'none', cursor: 'pointer' }}
                      {...field('track')}
                    >
                      <option value="">What are you looking for?</option>
                      {TRACK_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.track && <span role="alert" style={errorStyle}>{errors.track.message}</span>}
                  </div>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-budget" style={labelStyle}>Budget Range *</label>
                    <select
                      id="contact-budget"
                      style={{ ...getInputStyle('budget'), appearance: 'none', cursor: 'pointer' }}
                      {...field('budget')}
                    >
                      <option value="">Select a range</option>
                      {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {errors.budget && <span role="alert" style={errorStyle}>{errors.budget.message}</span>}
                  </div>
                </div>

                {/* Message */}
                <div style={fieldWrap}>
                  <label htmlFor="contact-message" style={labelStyle}>Message *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your goals and current challenges..."
                    style={{ ...getInputStyle('message'), resize: 'vertical', lineHeight: 1.6 }}
                    {...field('message')}
                  />
                  {errors.message && <span role="alert" style={errorStyle}>{errors.message.message}</span>}
                </div>

                {/* Server error */}
                {submitStatus === 'error' && serverError && (
                  <p role="alert" style={{ ...errorStyle, fontSize: '14px', margin: 0 }}>{serverError}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    fontSize: '15px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    border: 'none',
                    cursor: submitStatus === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: submitStatus === 'loading' ? 0.7 : 1,
                    transition: 'transform 160ms ease-out, opacity 160ms ease-out',
                  }}
                >
                  {submitStatus === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-3)', margin: 0, textAlign: 'center' }}>
                  We respond to every message within 48 hours.
                </p>
              </form>
            )}
          </div>

          {/* ── RIGHT: Info ── */}
          <div className="contact-info-col" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

            {/* What happens next */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '16px', color: 'var(--color-text-1)', margin: '0 0 24px', letterSpacing: '-0.2px' }}>
                What happens next
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {NEXT_STEPS.map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-teal)', letterSpacing: '0.08em', flexShrink: 0, paddingTop: '2px' }}>
                      {step.num}
                    </span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--color-text-1)', margin: '0 0 4px' }}>{step.title}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.65, color: 'var(--color-text-2)', margin: 0 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', color: 'var(--color-text-3)', textTransform: 'uppercase', margin: 0 }}>
                Or reach us directly
              </p>
              <a
                href="mailto:connect@atomeric.com"
                style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-teal)', textDecoration: 'none', transition: 'opacity 160ms ease-out' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                connect@atomeric.com
              </a>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-3)', margin: 0, lineHeight: 1.6 }}>
                We respond to every message within 48 hours. Usually much faster.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── §3 STRATEGY CALL ────────────────────────────────────── */}
      <section
        aria-label="Book a strategy call"
        style={{
          paddingTop: '64px',
          paddingBottom: '64px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-surface-2)',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <div
          className="contact-call-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: 'var(--color-teal)', textTransform: 'uppercase' }}>
              PREFER TO TALK FIRST?
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.8px', color: 'var(--color-text-1)', margin: 0 }}>
              Book a strategy call directly
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7, color: 'var(--color-text-2)', margin: 0 }}>
              30 minutes. No agenda except understanding where you are and where you want to go. We&apos;ll share our honest assessment — what&apos;s working, what isn&apos;t, and what we&apos;d do differently.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Free · No commitment', '30 minutes via Google Meet or Zoom', 'Walk away with a clear action plan'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-teal)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-2)' }}>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="btn-primary"
              style={{
                marginTop: '8px',
                display: 'inline-block',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              Book a time →
            </a>
          </div>
        </div>
      </section>

      {/* ── §4 FAQ STRIP ────────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions"
        style={{
          paddingTop: '80px',
          paddingBottom: '96px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--color-text-1)', margin: '0 0 40px' }}>
            Common questions
          </h2>

          <div role="list" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} role="listitem" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '20px 0',
                      textAlign: 'left',
                      gap: '16px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-1)', lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '18px',
                        color: 'var(--color-teal)',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* CSS grid expand trick */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 280ms cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: 'var(--color-text-2)', margin: '0 0 20px', paddingRight: '40px' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* Bottom border */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)' }} />
          </div>
        </div>
      </section>

    </div>
  )
}
