'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

gsap.registerPlugin()

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!overlayRef.current || !wordmarkRef.current || !lineRef.current) return

    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    })

    tl.from(wordmarkRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.4,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    })
      .from(
        lineRef.current,
        {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        '-=0.1'
      )
      .to(overlayRef.current, {
        opacity: 0,
        y: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.3,
      })
  }, [])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      className="loader-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#060C18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <span
        ref={wordmarkRef}
        className="loader-wordmark"
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '48px',
          fontWeight: 600,
          letterSpacing: '-1.5px',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.85)' }}>atom</span>
        <span style={{ color: '#0DBFAD' }}>eric</span>
      </span>
      <div
        ref={lineRef}
        className="loader-line"
        style={{
          width: '120px',
          height: '1px',
          background: '#0DBFAD',
          transformOrigin: 'center',
        }}
      />
    </div>
  )
}
