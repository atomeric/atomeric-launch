import type { Metadata } from 'next'
import { ServicesContent } from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services — Strategy, Build, Grow & Transform',
  description:
    'Four growth tracks — Strategy, Build, Grow, and Transform — with AI-powered execution, 48hr turnaround, and GEO-first visibility for ambitious brands.',
  alternates: { canonical: 'https://atomeric.com/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://atomeric.com/services' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://atomeric.com/services#strategy',
      name: 'Strategy',
      description:
        'Market positioning, competitive analysis, and AI-powered roadmaps that define where you win before you spend a dollar on execution.',
      provider: { '@id': 'https://atomeric.com/#organization' },
      serviceType: 'Digital Strategy',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Strategy Capabilities',
        itemListElement: [
          'Brand Positioning', 'Competitive Analysis', 'ICP Definition', 'Market Research',
          'Content Strategy', 'GEO Strategy', 'Go-to-Market Planning', 'Messaging Architecture',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://atomeric.com/services#build',
      name: 'Build',
      description:
        'Websites, platforms, and content systems engineered for speed, conversions, and search visibility — delivered in days, not months.',
      provider: { '@id': 'https://atomeric.com/#organization' },
      serviceType: 'Web Development & Design',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Build Capabilities',
        itemListElement: [
          'Website Design', 'Web Development', 'Landing Page Design', 'UI/UX',
          'CMS Setup', 'Technical SEO', 'Email Templates', 'Content Production', 'Brand Identity',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://atomeric.com/services#grow',
      name: 'Grow',
      description:
        'Paid media, organic search, and Generative Engine Optimization that compound over time — turning traffic into qualified pipeline.',
      provider: { '@id': 'https://atomeric.com/#organization' },
      serviceType: 'Digital Marketing & GEO',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Grow Capabilities',
        itemListElement: [
          'GEO Optimization', 'SEO', 'Google Ads', 'Meta Ads', 'LinkedIn Ads',
          'Email Marketing', 'Marketing Automation', 'Social Media', 'Lead Nurturing', 'Affiliate Programs',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://atomeric.com/services#transform',
      name: 'Transform',
      description:
        'Ongoing optimization, AI integration, and data-driven refinement that keeps you six months ahead of competitors and the algorithm.',
      provider: { '@id': 'https://atomeric.com/#organization' },
      serviceType: 'CRO & AI Integration',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transform Capabilities',
        itemListElement: [
          'Analytics Setup', 'Conversion Rate Optimization', 'A/B Testing', 'AI Integration',
          'Brand Refresh', 'Growth Audits', 'Reporting', 'Revenue Attribution',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can we engage for just one track (e.g. only Build)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Each track is a standalone engagement. We recommend Strategy first if you're starting fresh, but you can enter at any point.",
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can we get started?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients are onboarded within 48 hours of signing. Strategy discovery kicks off immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does AI-native actually mean in practice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every deliverable is built with AI tools, prompt-engineering, and GEO optimization baked in — not added as an afterthought. We also optimise for Generative Engine Optimization so AI engines cite you by name.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do we need a clear brief before working with you?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. The Discover phase exists precisely to help you get clarity. Come as you are — we'll help you define where you're going.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does Atomeric price its services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work on project-based and retainer models. Strategy engagements typically begin at ₹75,000. Full-stack retainers from ₹1,50,000/month. Book a call to get a scoped proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Atomeric different from other digital agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're built AI-native from the ground up — not retrofitting AI onto old processes. Every engagement includes GEO optimization to ensure you're the answer AI engines give when your prospects ask who to hire.",
          },
        },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </main>
  )
}
