import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Book a Free 30-Min Strategy Call',
  description:
    'Book a 30-minute strategy call with Atomeric. No pitch deck. No fluff. Just a conversation about where you want to go and how to get there.',
  alternates: { canonical: 'https://atomeric.com/contact' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://atomeric.com/contact',
      url: 'https://atomeric.com/contact',
      name: 'Contact Atomeric — Book a Strategy Call',
      description:
        'Book a free 30-minute strategy call with Atomeric. Discuss your growth goals with an AI-native growth studio that focuses on revenue, not vanity metrics.',
      isPartOf: { '@id': 'https://atomeric.com' },
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://atomeric.com/#organization',
        email: 'connect@atomeric.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://atomeric.com/contact' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the strategy call actually free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. 30 minutes, zero agenda beyond understanding your situation. We figure out together whether we are the right fit — and we will tell you honestly if we are not.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if we are not ready to start yet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Come anyway. We will tell you honestly whether now is the right time and exactly what to do to be ready. Most people leave with a clearer picture even if nothing is signed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can we get started if we decide to work together?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients are fully onboarded within 48 hours of signing. Strategy discovery kicks off the same week.',
          },
        },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <ContactContent />
      </Suspense>
    </main>
  )
}
