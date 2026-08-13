import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Atomeric collects, uses, and protects your data in accordance with Indian data protection law. Last updated 1 April 2026.',
  alternates: { canonical: 'https://atomeric.com/privacy' },
  robots: { index: false, follow: false },
}

const SECTIONS = [
  {
    heading: 'About This Policy',
    body: [
      'Atomeric (connect@atomeric.com) is a growth studio operating in Kolkata, West Bengal, India. This Privacy Policy explains how we collect, use, store, and protect personal information submitted through our website atomeric.com.',
      'By using our website or submitting information through our contact form, you consent to the data practices described in this policy.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: [
      'Contact form submissions: your name, email address, company name, message, and budget range — submitted when you choose to get in touch with us.',
      'Usage data: page visits, session duration, and interaction events collected through analytics tools such as Google Analytics, if enabled.',
      'Device data: browser type, IP address, operating system, and referring URLs, collected automatically when you visit our site.',
      'We do not collect payment information directly on this website. Any payments are handled through secure third-party payment processors.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'To respond to your enquiries and schedule strategy calls you have requested.',
      'To understand how visitors interact with our website and improve our content and user experience.',
      'To send updates about our services, only where you have provided explicit consent to receive such communications.',
      'We do not use your data for automated profiling, third-party targeted advertising, or any purpose not disclosed in this policy.',
    ],
  },
  {
    heading: 'Data Sharing and Disclosure',
    body: [
      'We do not sell, rent, or trade your personal information to third parties under any circumstances.',
      'We may share your information with trusted service providers — such as CRM tools, scheduling platforms, and analytics providers — solely to operate our business and deliver services to you. These providers are bound by strict confidentiality obligations.',
      'We may disclose your data if required by law, court order, or upon request from a competent government authority under applicable Indian law, including the Information Technology Act, 2000.',
    ],
  },
  {
    heading: 'Cookies and Tracking',
    body: [
      'Our website uses essential cookies required for basic site functionality. We may also use analytics cookies to understand visitor behaviour and improve our services.',
      'You may disable cookies at any time through your browser settings. Disabling essential cookies may affect certain features of our website.',
      'We do not use cookies for cross-site tracking or third-party retargeting advertising.',
    ],
  },
  {
    heading: 'Data Storage and Retention',
    body: [
      'Your data is stored on secure servers. We retain contact form submissions and enquiry records for up to 24 months, after which they are permanently deleted — unless a longer retention period is required by applicable law.',
      'We implement appropriate technical and organisational security measures in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
      'No online transmission or storage system can be guaranteed to be completely secure. While we take every reasonable precaution, we cannot guarantee absolute security of data transmitted over the internet.',
    ],
  },
  {
    heading: 'Your Rights Under Indian Law',
    body: [
      'Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000, you have the right to: access the personal data we hold about you; request correction of inaccurate or incomplete data; request erasure of your data where it is no longer required; withdraw consent to processing at any time; and nominate a person to exercise these rights on your behalf.',
      'To exercise any of these rights, contact our Grievance Officer (see below). We will respond within 30 days of receiving your request.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies independently.',
      'This Privacy Policy applies solely to atomeric.com and information collected through it.',
    ],
  },
  {
    heading: 'Children\'s Privacy',
    body: [
      'Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has submitted their information to us, please contact us at connect@atomeric.com and we will delete it promptly.',
    ],
  },
  {
    heading: 'Grievance Officer',
    body: [
      'In accordance with the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a Grievance Officer to address concerns related to the collection, storage, or processing of your personal data.',
      'Name: Gautam | Designation: Founder, Atomeric | Email: connect@atomeric.com | Address: Kolkata, West Bengal, India',
      'We will acknowledge your grievance within 24 hours and endeavour to resolve it within 30 days of receipt.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any material changes will be reflected by an updated "Last Updated" date at the top of this page.',
      'Continued use of our website after any changes to this policy constitutes your acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'For any questions, concerns, or requests related to this Privacy Policy or how we handle your personal data, please contact us at connect@atomeric.com or write to: Atomeric, Kolkata, West Bengal, India.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--color-void)',
          paddingTop: '140px',
          paddingBottom: '64px',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          overflow: 'hidden',
        }}
      >
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-teal)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: 'var(--color-text-1)',
              letterSpacing: '-2px',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--color-text-3)',
            }}
          >
            Last updated: 1 April 2026
          </p>
        </div>
      </section>

      {/* ── Document body ────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--color-surface-1)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '80px clamp(20px, 5vw, 80px)',
          }}
        >
          {SECTIONS.map((section, i) => (
            <div key={section.heading}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-0.5px',
                  marginBottom: '12px',
                  marginTop: i === 0 ? '0' : '40px',
                }}
              >
                {section.heading}
              </h2>
              {section.body.map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: 'var(--color-text-2)',
                    marginBottom: '16px',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Bottom rule */}
          <div
            style={{
              marginTop: '64px',
              paddingTop: '32px',
              borderTop: '1px solid var(--color-border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-text-3)',
              letterSpacing: '0.05em',
            }}
          >
            Atomeric · connect@atomeric.com · atomeric.com
          </div>
        </div>
      </section>
    </main>
  )
}
