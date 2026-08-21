'use client'

import { useEffect } from 'react'
import { registerGSAP } from '@/lib/gsap'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGSAP()
  }, [])

  return <>{children}</>
}
