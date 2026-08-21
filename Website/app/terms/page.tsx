import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing use of Atomeric services. Governed by Indian law with jurisdiction in Kolkata, West Bengal. Last updated 1 April 2026.',
  alternates: { canonical: 'https://atomeric.com/terms' },
  robots: { index: false, follow: false },
}

const SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: [
      'By accessing atomeric.com or engaging Atomeric for any service, you agree to be bound by these Terms of Service and all applicable Indian laws and regulations. If you do not agree with any part of these terms, you must not use our website or services.',
      'These terms constitute a legally binding agreement between you (the "Client") and Atomeric, a growth studio based in Kolkata, West Bengal, India.',
    ],
  },
  {
    heading: 'Definitions',
    body: [
      '"Atomeric", "we", "us", or "our" refers to the growth studio operating under the Atomeric brand, based in Kolkata, West Bengal, India.',
      '"Client" or "you" refers to any individual, company, or entity that engages Atomeric for services or uses this website.',
      '"Services" refers to all strategy, design, web development, content production, GEO optimisation, marketing, and related services provided by Atomeric.',
      '"Engagement" refers to a specific project or retainer arrangement confirmed through a written agreement, proposal, or Statement of Work (SOW).',
    ],
  },
  {
    heading: 'Services',
    body: [
      'Atomeric provides digital strategy, design, development, and growth marketing services as defined and agreed upon in each client engagement. Scope, deliverables, milestones, and timelines are confirmed in writing before any work commences.',
      'We reserve the right to decline or discontinue any engagement at our sole discretion. We may engage vetted subcontractors or third-party specialists to assist in delivering services, while maintaining full responsibility for the quality of deliverables.',
      'We do not guarantee specific rankings, traffic levels, lead volumes, conversion rates, or revenue outcomes. Digital marketing results depend on numerous external factors outside our control, including search engine algorithm changes.',
    ],
  },
  {
    heading: 'Client Responsibilities',
    body: [
      'You agree to provide accurate and complete project briefs, timely feedback, required approvals, and any assets, brand materials, or access credentials needed to deliver the agreed scope.',
      'Delays caused by late client feedback, missing materials, withheld approvals, or changes in brief are not Atomeric\'s responsibility and may result in revised timelines and additional charges.',
      'You represent and warrant that you have full legal authority to commission the work, and that any content, materials, data, or intellectual property you provide do not infringe upon the rights of any third party.',
    ],
  },
  {
    heading: 'Payment Terms',
    body: [
      'All fees are quoted and payable in Indian Rupees (₹) unless otherwise expressly agreed in writing. Applicable Goods and Services Tax (GST) will be levied on all invoices at the prevailing statutory rate.',
      'A non-refundable advance — typically 50% of the total project value — is required before work commences on any engagement. The remaining balance is due upon project completion or as specified in the payment schedule agreed in writing.',
      'Invoices are due within 15 days of the invoice date. Payments outstanding beyond 15 days will attract an interest charge of 1.5% per month on the overdue amount.',
      'Atomeric reserves the right to pause work, withhold deliverables, or suspend access to any assets until outstanding dues are cleared in full.',
    ],
  },
  {
    heading: 'Cancellation and Refunds',
    body: [
      'Either party may cancel an engagement by providing 14 days\' written notice to connect@atomeric.com. Cancellation notice sent by email shall be deemed received on the next business day.',
      'All work completed and expenses incurred up to the date of cancellation are billable and payable within 15 days of the cancellation notice.',
      'The advance payment is non-refundable in all circumstances. No refund is provided for services already rendered within a billing period. If Atomeric cancels an engagement without cause, any advance paid for undelivered work will be refunded within 30 days.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'Upon receipt of full and final payment for an engagement, you own all deliverables specifically created for your project — including designs, website code, and written content produced exclusively for you under that engagement.',
      'Atomeric retains all rights to its proprietary methodologies, internal frameworks, templates, training data, tools, pre-existing code libraries, and any intellectual property developed independently of your project. Nothing in these terms transfers any rights in Atomeric\'s underlying systems or processes.',
      'We may reference your project name, brand, and outputs in our portfolio, case studies, proposals, and marketing materials unless you submit a written request to the contrary before project completion.',
    ],
  },
  {
    heading: 'Confidentiality',
    body: [
      'Both parties agree to hold each other\'s confidential business information — including strategies, pricing, client lists, technical infrastructure, and commercial plans — in strict confidence and not to disclose it to any third party without prior written consent.',
      'This confidentiality obligation continues for 2 years after the conclusion of an engagement. It does not apply to information that is or becomes publicly available through no fault of the receiving party, or that is required to be disclosed by law or court order.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted under applicable Indian law, Atomeric\'s total aggregate liability for any claim arising from a specific engagement is limited to the total fees paid by you for that engagement.',
      'Atomeric is not liable for any indirect, incidental, consequential, special, or punitive damages — including loss of revenue, profits, data, business opportunities, or goodwill — whether arising in contract, tort, or otherwise, even if advised of the possibility of such damages.',
      'Nothing in these terms limits liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.',
    ],
  },
  {
    heading: 'Force Majeure',
    body: [
      'Neither party shall be liable for any delay or failure in performance resulting from events beyond their reasonable control, including but not limited to natural disasters, acts of God, government restrictions, internet or power failures, pandemics, or civil unrest.',
      'The affected party must notify the other in writing within 7 days of the event. If the force majeure event continues for more than 30 days, either party may terminate the engagement with immediate written notice.',
    ],
  },
  {
    heading: 'Governing Law and Jurisdiction',
    body: [
      'These Terms of Service are governed by and construed in accordance with the laws of India, including but not limited to the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act, 2019.',
      'Any disputes, claims, or controversies arising from or in connection with these terms or any engagement with Atomeric shall be subject to the exclusive jurisdiction of the competent courts located in Kolkata, West Bengal, India.',
    ],
  },
  {
    heading: 'Dispute Resolution',
    body: [
      'In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation within 30 days of written notice of the dispute.',
      'If negotiation does not resolve the matter, the dispute shall be referred to and finally resolved by binding arbitration under the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Kolkata, West Bengal. Proceedings shall be conducted in English by a sole arbitrator mutually appointed by both parties.',
    ],
  },
  {
    heading: 'Grievance Officer',
    body: [
      'For any complaints, concerns, or disputes relating to our services or these terms, you may contact our designated Grievance Officer.',
      'Name: Gautam | Designation: Founder, Atomeric | Email: connect@atomeric.com | Address: Kolkata, West Bengal, India',
      'We will acknowledge your complaint within 24 hours and endeavour to resolve it within 30 days of receipt.',
    ],
  },
  {
    heading: 'Amendments',
    body: [
      'Atomeric reserves the right to update or modify these Terms of Service at any time. Updated terms will be published at atomeric.com/terms with a revised "Last Updated" date.',
      'Continued use of our website or services after any such update constitutes your acceptance of the revised terms. We encourage you to review this page periodically.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'For any questions about these Terms of Service, please contact us at connect@atomeric.com or write to: Atomeric, Kolkata, West Bengal, India.',
    ],
  },
]

export default function TermsPage() {
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
            Terms of Service
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
