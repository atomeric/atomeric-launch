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
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does the Atomeric process take from start to launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most engagements run 4–8 weeks from kick-off to launch. Strategy and discovery typically take 1 week. Build and launch take 2–4 weeks depending on scope. Ongoing Grow and Transform work begins immediately after launch.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens in the Discover phase?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discover is a deep audit of your market, competitors, ideal customer profile (ICP), and current positioning. We identify gaps, opportunities, and the fastest path to revenue before a single asset is created.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be involved in every step of the process?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. We keep your involvement lean — typically two 30-minute check-ins per week. We handle the execution; you handle the decisions. Most founders spend 2–3 hours per week total during the engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What deliverables do I get at the end of the Strategize phase?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You receive a complete growth playbook: brand positioning document, ICP definition, channel strategy, content pillar map, GEO keyword targets, and a prioritised 90-day execution roadmap.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Atomeric measure success?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We track pipeline-level metrics — qualified leads, conversion rates, and revenue attribution — not just traffic or impressions. Every engagement has defined KPIs agreed before work begins.',
          },
        },
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
