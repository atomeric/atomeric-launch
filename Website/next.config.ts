import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development'

// React dev mode uses eval() for call stack reconstruction — unsafe-eval is
// required in development only. Production stays strict (no unsafe-eval).
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com',
].join(' ')

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Prevent clickjacking (belt-and-suspenders alongside CSP frame-ancestors)
  { key: 'X-Frame-Options', value: 'DENY' },

  // Disable legacy XSS auditor (modern browsers use CSP instead)
  { key: 'X-XSS-Protection', value: '0' },

  // Limit referrer data on cross-origin requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Restrict browser feature APIs
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },

  // Force HTTPS for 1 year, include subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },

  // Content Security Policy
  // - script-src: dev adds unsafe-eval (React dev tools need it); prod is strict
  // - style-src: self + inline (all inline styles) + Google Fonts
  // - font-src: self + Google Fonts CDN
  // - img-src: self + data URIs + https (OG images, GA beacon)
  // - connect-src: self + GA
  // - frame-ancestors: none (no embedding)
  // - base-uri / form-action locked to self
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
