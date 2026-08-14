import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/providers'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
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
    default: 'Atomeric — AI-Native Growth Studio for Ambitious Brands',
    template: '%s | Atomeric',
  },
  description:
    'Atomeric builds AI-powered systems that generate leads, conversions, and compound growth for ambitious brands. Strategy · Build · Grow · Transform',
  keywords: [
    'AI growth studio',
    'growth studio',
    'AI marketing',
    'GEO optimization',
    'generative engine optimization',
    'AI-native studio',
    'lead generation',
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
    title: 'Atomeric — AI-Native Growth Studio for Ambitious Brands',
    description:
      'We build AI-powered digital systems that generate leads, conversions, and compound growth for ambitious brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atomeric — AI-Native Growth Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atomeric — AI-Native Growth Studio for Ambitious Brands',
    description:
      'We build AI-powered digital systems that generate leads, conversions, and compound growth for ambitious brands.',
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
    >
      <head>
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
          <Footer />
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ED95BNYH29"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ED95BNYH29');`}
        </Script>
      </body>
    </html>
  )
}
