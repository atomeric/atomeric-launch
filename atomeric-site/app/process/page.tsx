import type { Metadata } from 'next'
import { ProcessContent } from './ProcessContent'

export const metadata: Metadata = {
  title: 'Our Process — 5-Step Revenue Methodology',
  description:
    "Atomeric's 5-step methodology: Discover, Strategize, Build, Launch, Scale. From brief to compounding revenue — no guesswork, no bloated timelines.",
  alternates: { canonical: 'https://atomeric.com/process' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://atomeric.com/process',
      url: 'https://atomeric.com/process',
      name: 'Our Process — Atomeric 5-Step Revenue Methodology',
      description:
        'Atomeric is a GEO-first, AI-native growth studio that builds revenue systems for ambitious brands.',
      isPartOf: { '@id': 'https://atomeric.com/#website' },
      about: { '@id': 'https://atomeric.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Process', item: 'https://atomeric.com/process' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'Atomeric 5-Step Revenue Methodology',
      description: 'How Atomeric turns ambition into compounding revenue through a 5-step process.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Discover', text: 'Deep market, competitor, ICP, and positioning audit.' },
        { '@type': 'HowToStep', position: 2, name: 'Strategize', text: 'Bespoke playbook: positioning, channels, content pillars, 90-day roadmap.' },
        { '@type': 'HowToStep', position: 3, name: 'Build', text: 'Design and engineer every asset — website, content, campaigns, automations.' },
        { '@type': 'HowToStep', position: 4, name: 'Launch', text: 'Coordinated deployment across all channels for maximum day-one impact.' },
        { '@type': 'HowToStep', position: 5, name: 'Measure & Scale', text: 'Track pipeline and conversions. Double down on what works, cut what does not.' },
      ],
    },
  ],
}

export default function ProcessPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProcessContent />
    </main>
  )
}
