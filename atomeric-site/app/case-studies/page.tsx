import type { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Client Results',
  description:
    'GEO-led transformations across B2B SaaS, D2C, Fintech, Edtech, and Industrial. Real results, real methodology.',
}

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section
        aria-label="Client Results"
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-void)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span
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
            CLIENT RESULTS
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: 'var(--color-text-1)',
              letterSpacing: '-2px',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            What GEO-led strategy delivers.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--color-text-2)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Five transformations across B2B SaaS, D2C, Fintech, Edtech, and Industrial — each built on the same GEO-first methodology.
          </p>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section
        aria-label="Case study list"
        style={{
          paddingBottom: '128px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          background: 'var(--color-void)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="case-studies-grid"
        >
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <article
                className="card-lift-translate"
                style={{
                  height: '100%',
                  background: 'var(--color-surface-1)',
                  border: '1px solid var(--color-border-subtle)',
                  borderTop: '2px solid var(--color-teal-border)',
                  borderRadius: '12px',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
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
                    alignSelf: 'flex-start',
                  }}
                >
                  {cs.industry}
                </span>

                {/* Client label */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-3)',
                  }}
                >
                  {cs.clientLabel}
                </p>

                {/* Challenge one-liner */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--color-text-2)',
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {cs.challengeOneLiner}
                </p>

                {/* Hero stat */}
                <div
                  style={{
                    borderTop: '1px solid var(--color-border-subtle)',
                    paddingTop: '20px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: 600,
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        color: 'var(--color-teal)',
                      }}
                    >
                      {cs.heroStat}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        color: 'var(--color-text-3)',
                        lineHeight: 1.5,
                        marginTop: '6px',
                      }}
                    >
                      {cs.heroStatLabel}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'var(--color-teal)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Read the full story →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile responsive override */}
        <style>{`
          @media (max-width: 767px) {
            .case-studies-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </main>
  )
}
