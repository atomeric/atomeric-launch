import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function registerGSAP() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.defaults({
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
    duration: 0.6,
  })
}

// Call once in layout via useEffect (client-side only)
