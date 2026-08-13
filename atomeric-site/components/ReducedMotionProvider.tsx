'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export function ReducedMotionProvider() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const apply = (matches: boolean) => {
      gsap.globalTimeline.timeScale(matches ? 1000 : 1)
    }

    apply(mq.matches)
    mq.addEventListener('change', (e) => apply(e.matches))
    return () => mq.removeEventListener('change', (e) => apply(e.matches))
  }, [])

  return null
}
