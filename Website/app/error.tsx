'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
          cx="12%"
          cy="18%"
          r="260"
          fill="none"
          stroke="rgba(12,4,87,0.05)"
          strokeWidth="1"
          strokeDasharray="380 1120"
          strokeDashoffset="60"
        />
        <circle
          cx="88%"
          cy="82%"
          r="240"
          fill="none"
          stroke="rgba(0,115,185,0.07)"
          strokeWidth="1"
          strokeDasharray="300 1000"
        />
        <circle
          cx="20%"
          cy="75%"
          r="110"
          fill="none"
          stroke="rgba(175,171,79,0.18)"
          strokeWidth="1"
          strokeDasharray="160 530"
        />
        <circle cx="22%" cy="16%" r="3.5" fill="rgba(12,4,87,0.12)" />
        <circle cx="86%" cy="76%" r="3" fill="rgba(0,115,185,0.2)" />
        <circle cx="18%" cy="82%" r="2.5" fill="rgba(175,171,79,0.3)" />
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
          Unexpected Error
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
          Something broke.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-text-3)',
            lineHeight: 1.65,
            margin: '0 0 36px',
            maxWidth: '380px',
          }}
        >
          An unexpected error occurred. Try refreshing — if it persists, reach out and we&apos;ll sort it.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-ghost">
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p
            style={{
              marginTop: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'rgba(12,4,87,0.35)',
              background: 'rgba(12,4,87,0.04)',
              border: '1px solid rgba(12,4,87,0.08)',
              padding: '6px 14px',
              borderRadius: '3px',
              letterSpacing: '0.04em',
            }}
          >
            digest: {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
