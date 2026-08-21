import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="blueprint-grid"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-void)',
        padding: 'clamp(40px, 8vw, 100px) var(--page-pad)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbital arcs */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="90%"
          cy="15%"
          r="280"
          fill="none"
          stroke="rgba(12,4,87,0.05)"
          strokeWidth="1"
          strokeDasharray="420 1200"
        />
        <circle
          cx="10%"
          cy="85%"
          r="220"
          fill="none"
          stroke="rgba(0,115,185,0.07)"
          strokeWidth="1"
          strokeDasharray="320 1040"
        />
        <circle
          cx="80%"
          cy="78%"
          r="120"
          fill="none"
          stroke="rgba(175,171,79,0.18)"
          strokeWidth="1"
          strokeDasharray="180 570"
        />
        <circle cx="78%" cy="14%" r="4" fill="rgba(0,115,185,0.18)" />
        <circle cx="12%" cy="72%" r="3" fill="rgba(175,171,79,0.3)" />
        <circle cx="85%" cy="82%" r="2.5" fill="rgba(12,4,87,0.12)" />
      </svg>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '520px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-teal)',
            fontWeight: 500,
            border: '1px solid rgba(0,115,185,0.22)',
            padding: '5px 14px',
            borderRadius: '3px',
            background: 'rgba(0,115,185,0.05)',
            marginBottom: '28px',
            display: 'inline-block',
          }}
        >
          404 — Page not found
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(56px, 8vw, 96px)',
            fontWeight: 700,
            color: 'var(--color-text-1)',
            lineHeight: 1,
            margin: '0 0 20px',
            letterSpacing: '-0.02em',
          }}
        >
          Wrong Turn.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-text-3)',
            lineHeight: 1.65,
            margin: '0 0 36px',
            maxWidth: '360px',
          }}
        >
          This page doesn&apos;t exist or was moved. Let&apos;s get you back on track.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Talk to us
          </Link>
        </div>
      </div>
    </main>
  )
}
