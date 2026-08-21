import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/providers'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrandStrip } from '@/components/layout/BrandStrip'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { ReducedMotionProvider } from '@/components/ReducedMotionProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://atomeric.com'),
  title: {
    default: 'Atomeric — AI Growth Studio India | GEO & Marketing',
    template: '%s | Atomeric',
  },
  description:
    'Atomeric is an AI-native growth studio in India. We build GEO strategies, AI marketing systems, and lead generation for ambitious Indian startups and B2B brands.',
  keywords: [
    'AI growth studio India',
    'GEO optimization India',
    'generative engine optimization',
    'AI marketing India',
    'Indian startup marketing',
    'B2B lead generation India',
    'AI-native studio',
  ],
  authors: [{ name: 'Atomeric', url: 'https://atomeric.com' }],
  creator: 'Atomeric',
  publisher: 'Atomeric',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atomeric.com',
    siteName: 'Atomeric',
    title: 'Atomeric — AI Growth Studio India | GEO & Marketing',
    description:
      'AI-native growth studio in India. We build GEO strategies, AI marketing systems, and lead generation for ambitious Indian startups and B2B brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atomeric — AI Growth Studio India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atomeric — AI Growth Studio India | GEO & Marketing',
    description:
      'AI-native growth studio in India. We build GEO strategies, AI marketing systems, and lead generation for ambitious Indian startups and B2B brands.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://atomeric.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://atomeric.com/#organization',
      name: 'Atomeric',
      url: 'https://atomeric.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://atomeric.com/logo.png',
        width: 512,
        height: 512,
      },
      description:
        'AI-native growth studio that builds revenue systems for ambitious brands through Strategy, Build, Grow, and Transform service tracks.',
      email: 'connect@atomeric.com',
      foundingDate: '2024',
      areaServed: 'India',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'AI Marketing',
        'Generative Engine Optimization',
        'Lead Generation',
        'Digital Strategy',
        'Web Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://atomeric.com/#website',
      url: 'https://atomeric.com',
      name: 'Atomeric',
      publisher: { '@id': 'https://atomeric.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var s=localStorage.getItem('atomeric-theme');if(s==='dark'||s==='light'){document.documentElement.dataset.theme=s;}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.dataset.theme='dark';}else{document.documentElement.dataset.theme='light';}}catch(e){}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
          style={{ background: 'var(--color-teal)', color: 'var(--color-void)' }}
        >
          Skip to content
        </a>
        <Providers>
          <ReducedMotionProvider />
          <LoadingScreen />
          <Navigation />
          {children}
          <BrandStrip />
          <Footer />
          <FloatingCTA />
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            {/* Google Consent Mode v2 — denied by default (DPDP compliant) */}
            <Script id="consent-init" strategy="beforeInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
