import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CASE_STUDIES, SLUGS } from '@/lib/case-studies'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.clientLabel} | Client Results`,
    description: cs.challengeOneLiner,
  }
}

function renderParagraphs(text: string, style: React.CSSProperties) {
  return text
    .split('\n\n')
    .filter(Boolean)
    .map((para, i) => (
      <p key={i} style={style}>
        {para}
      </p>
    ))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params

  // Validate slug against the known allowlist before rendering anything
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) return notFound()

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug)
  const nextCs = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `${cs.clientLabel} — GEO-led transformation`,
        description: cs.challengeOneLiner,
        author: {
          '@type': 'Organization',
          name: 'Atomeric',
          url: 'https://atomeric.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Atomeric',
        },
        datePublished: '2025-08-01',
      },
      {
        '@type': 'FAQPage',
        mainEntity: cs.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  const bodyTextStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--color-text-2)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 700,
    color: 'var(--color-text-1)',
    letterSpacing: '-1px',
    lineHeight: 1.15,
    marginBottom: '24px',
  }

  return (
    <main id="main-content">
      {/* JSON-LD — follows existing layout.tsx pattern, all values are static strings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          paddingTop: '110px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          paddingBottom: '20px',
          background: 'var(--color-void)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <ol
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              color: 'var(--color-text-3)',
            }}
          >
            <li>
              <Link href="/" style={{ color: 'var(--color-text-3)', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" style={{ opacity: 0.4 }}>/</li>
            <li>
              <Link href="/case-studies" style={{ color: 'var(--color-text-3)', textDecoration: 'none' }}>
                Client Results
              </Link>
            </li>
            <li aria-hidden="true" style={{ opacity: 0.4 }}>/</li>
            <li style={{ color: 'var(--color-text-2)' }}>{cs.clientLabel}</li>
          </ol>
        </div>
      </nav>

      {/* ── Header block ── */}
      <header
        style={{
          paddingTop: '40px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-void)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Industry tag */}
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
            {cs.industry}
          </span>

          {/* Client label */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-3)',
              marginBottom: '12px',
            }}
          >
            {cs.clientLabel}
          </p>

          {/* Hero stat */}
          <div
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(56px, 8vw, 96px)',
              fontWeight: 600,
              letterSpacing: '-3px',
              lineHeight: 1,
              color: 'var(--color-teal)',
              marginBottom: '12px',
            }}
          >
            {cs.heroStat}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-text-2)',
              marginBottom: '48px',
            }}
          >
            {cs.heroStatLabel}
          </p>

          {/* Pull stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--color-border-subtle)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
            className="cs-pull-stats"
          >
            {cs.pullStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--color-surface-1)',
                  padding: '24px 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 600,
                    letterSpacing: '-1px',
                    lineHeight: 1,
                    color: 'var(--color-text-1)',
                    marginBottom: '8px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'var(--color-text-3)',
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Body content ── */}
      <div
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-void)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* §1 The Challenge */}
          <section aria-labelledby="cs-challenge" style={{ marginBottom: '64px' }}>
            <h2 id="cs-challenge" style={sectionHeadingStyle}>The Challenge</h2>
            {renderParagraphs(cs.challenge, bodyTextStyle)}
          </section>

          {/* §2 The Approach */}
          <section aria-labelledby="cs-approach" style={{ marginBottom: '64px' }}>
            <h2 id="cs-approach" style={sectionHeadingStyle}>The Approach</h2>
            {renderParagraphs(cs.approach, bodyTextStyle)}
          </section>

          {/* §3 The Results */}
          <section aria-labelledby="cs-results" style={{ marginBottom: '64px' }}>
            <h2 id="cs-results" style={sectionHeadingStyle}>The Results</h2>
            {renderParagraphs(cs.results, bodyTextStyle)}
          </section>

          {/* §4 Pull quote */}
          <blockquote
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '28px',
              marginLeft: 0,
              marginRight: 0,
              marginBottom: '64px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontStyle: 'italic',
                color: 'var(--color-text-1)',
                lineHeight: 1.55,
                marginBottom: '16px',
              }}
            >
              &ldquo;{cs.pullQuote}&rdquo;
            </p>
            <cite
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-3)',
                fontStyle: 'normal',
              }}
            >
              — {cs.pullQuoteAttribution}
            </cite>
          </blockquote>

          {/* §5 What Made the Difference */}
          <section aria-labelledby="cs-difference" style={{ marginBottom: '64px' }}>
            <h2 id="cs-difference" style={sectionHeadingStyle}>What Made the Difference</h2>
            <p style={bodyTextStyle}>{cs.whatMadeTheDifference}</p>
          </section>

          {/* §6 FAQ */}
          <section aria-labelledby="cs-faq" style={{ marginBottom: '64px' }}>
            <h2 id="cs-faq" style={sectionHeadingStyle}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cs.faqItems.map((item, i) => (
                <details
                  key={i}
                  style={{
                    background: 'var(--color-surface-1)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <summary
                    style={{
                      padding: '20px 24px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'var(--color-text-1)',
                      lineHeight: 1.5,
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                    }}
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        color: 'var(--color-teal)',
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      margin: 0,
                      padding: '0 24px 20px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-text-2)',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* §7 CTA block */}
          <section
            aria-labelledby="cs-cta"
            style={{
              background: 'var(--color-surface-1)',
              border: '1px solid var(--color-border-subtle)',
              borderTop: '2px solid var(--color-teal)',
              borderRadius: '12px',
              padding: '48px 40px',
              marginBottom: '64px',
              textAlign: 'center',
            }}
          >
            <h2
              id="cs-cta"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '-0.5px',
                marginBottom: '12px',
              }}
            >
              See what this looks like for your brand.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-text-2)',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '440px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              We will audit your AI search visibility and show you exactly where the gaps are — in 48 hours.
            </p>
            <Link
              href="/contact?ref=case-study"
              className="btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              Get Free AI Visibility Audit →
            </Link>
          </section>

          {/* §8 Next case study */}
          <div
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <Link
              href="/case-studies"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-3)',
                textDecoration: 'none',
              }}
            >
              ← All results
            </Link>
            <Link
              href={`/case-studies/${nextCs.slug}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                color: 'var(--color-teal)',
                textDecoration: 'none',
              }}
            >
              Next: {nextCs.clientLabel} →
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        .cs-pull-stats { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 599px) {
          .cs-pull-stats { grid-template-columns: 1fr !important; }
        }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </main>
  )
}
