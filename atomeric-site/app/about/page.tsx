import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Atomeric — Revenue-Driven Growth Studio',
  description:
    'Atomeric is a revenue-driven growth studio. We build AI-powered systems for ambitious brands — focused on measurable outcomes, not vanity metrics.',
  alternates: { canonical: 'https://atomeric.com/about' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://atomeric.com/about',
      url: 'https://atomeric.com/about',
      name: 'About Atomeric — AI-Native Growth Studio',
      description:
        'Atomeric is an AI-native growth studio that builds revenue engines for ambitious brands using GEO-first content strategy, AI-powered systems, and a relentless focus on measurable growth.',
      isPartOf: { '@id': 'https://atomeric.com' },
      about: { '@id': 'https://atomeric.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://atomeric.com/#organization',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://atomeric.com/about' },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </main>
  )
}
