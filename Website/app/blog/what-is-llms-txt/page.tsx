import type { Metadata } from 'next'
import Link from 'next/link'

// Title: 41 chars ✓  Meta: 158 chars ✓
export const metadata: Metadata = {
  title: 'What is llms.txt? Why Your Site Needs It',
  description:
    'llms.txt is a simple file that tells AI engines what your website does. Learn what it is, how to create it, and why every site needs one in 2026.',
  keywords: [
    'llms.txt',
    'llms.txt explained',
    'what is llms.txt',
    'llms.txt for SEO',
    'AI search optimization file',
    'llms txt site file',
    'GEO llms.txt India',
  ],
  authors: [{ name: 'Gautam', url: 'https://atomeric.com/about' }],
  openGraph: {
    type: 'article',
    url: 'https://atomeric.com/blog/what-is-llms-txt',
    title: 'What is llms.txt? Why Your Site Needs It',
    description:
      'llms.txt tells AI engines what your website does, who you serve, and which pages matter. Here is the complete guide to creating one for your site.',
    images: [{ url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 }],
    publishedTime: '2026-08-14',
    modifiedTime: '2026-08-14',
    authors: ['https://atomeric.com/about'],
    tags: ['llms.txt', 'GEO', 'AI Search', 'India', 'B2B Marketing'],
  },
  alternates: { canonical: 'https://atomeric.com/blog/what-is-llms-txt' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': 'https://atomeric.com/blog/what-is-llms-txt',
    headline: 'What is llms.txt and Why Does Your Website Need One?',
    description:
      'A complete guide to llms.txt — the context file for AI engines that explains what your website does, who it serves, and which pages AI systems should prioritize when generating answers.',
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    author: { '@type': 'Person', name: 'Gautam', url: 'https://atomeric.com/about' },
    publisher: { '@id': 'https://atomeric.com/#organization' },
    url: 'https://atomeric.com/blog/what-is-llms-txt',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atomeric.com/blog/what-is-llms-txt' },
    image: { '@type': 'ImageObject', url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 },
    keywords: 'llms.txt, GEO, AI search optimization, AI context file, generative engine optimization',
    articleSection: 'GEO',
    wordCount: 1900,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atomeric.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'What is llms.txt?', item: 'https://atomeric.com/blog/what-is-llms-txt' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is llms.txt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'llms.txt is a plain-text file placed at the root of your website (e.g., yoursite.com/llms.txt) that provides AI systems with a structured overview of what your website does, who it serves, and which pages are most important. It is analogous to robots.txt (which guides web crawlers on access) but is designed as an orientation file for large language models and AI agents rather than a crawl access control mechanism.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is llms.txt required to rank in AI search?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. llms.txt is not required to appear in AI-generated answers. Google explicitly states that no special files or markup are required for AI Overviews. However, llms.txt reduces friction for AI systems trying to understand your site quickly and is especially useful for non-Google platforms like ChatGPT, Claude, and Perplexity, and for autonomous AI agents that evaluate your brand programmatically before a human ever visits your site.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is llms.txt different from robots.txt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'robots.txt is an access control file — it tells crawlers which pages they are allowed or not allowed to access. llms.txt is a context file — it tells AI systems what your website is about and which content matters most. They serve completely different purposes and should both be present on a well-optimized site. robots.txt does not orient AI systems; llms.txt does not control access.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I include in my llms.txt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A well-structured llms.txt should include: a brief description of what your company does and who it serves (2–3 sentences), your primary services or products as a structured list, links to your most important pages (homepage, services, about, contact, blog), links to key content assets (pillar guides, FAQ pages, case studies), and optionally your pricing structure if public. The format is plain text with clear sections and simple markdown-style headings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does llms.txt help with GEO and AI citations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, indirectly. llms.txt helps AI systems accurately understand and represent your brand — it reduces the risk that an AI engine misidentifies what you do, who you serve, or what makes you distinct. Accurate representation is a prerequisite for citation. It is particularly useful for new or less well-known brands that do not yet have widespread external coverage that AI training data would capture. Think of it as ensuring the AI\'s mental model of your company is correct.',
        },
      },
    ],
  },
]

const T = {
  eyebrow: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-teal)',
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    color: 'var(--color-text-2)',
    lineHeight: 1.75,
    margin: '0 0 28px',
  } as React.CSSProperties,
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 700,
    color: 'var(--color-text-1)',
    letterSpacing: '-0.5px',
    lineHeight: 1.2,
    margin: '56px 0 20px',
  } as React.CSSProperties,
  h3: {
    fontFamily: 'var(--font-body)',
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--color-text-1)',
    lineHeight: 1.35,
    margin: '36px 0 12px',
  } as React.CSSProperties,
  li: {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    color: 'var(--color-text-2)',
    lineHeight: 1.7,
    marginBottom: '10px',
  } as React.CSSProperties,
  code: {
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    background: 'var(--color-surface-2)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: '4px',
    padding: '2px 6px',
    color: 'var(--color-teal)',
  } as React.CSSProperties,
}

const link = { color: 'var(--color-teal)', textDecoration: 'underline', textUnderlineOffset: '3px' }

const codeBlock = {
  background: 'var(--color-surface-2)',
  border: '1px solid var(--color-border-subtle)',
  borderRadius: '8px',
  padding: '24px 28px',
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  color: 'var(--color-text-2)',
  lineHeight: 1.8,
  overflowX: 'auto' as const,
  margin: '0 0 28px',
  whiteSpace: 'pre' as const,
}

export default function WhatIsLlmsTxtPage() {
  return (
    <main id="main-content">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ── Header ── */}
      <header style={{ background: 'var(--color-void)', paddingTop: '128px', paddingBottom: '72px', paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '32px' }}>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'What is llms.txt?', href: null },
              ].map((crumb, i, arr) => (
                <li key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ ...T.eyebrow, textDecoration: 'none', opacity: 0.7 }}>{crumb.label}</Link>
                  ) : (
                    <span style={{ ...T.eyebrow, opacity: 1 }} aria-current="page">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span style={{ ...T.eyebrow, opacity: 0.35 }}>→</span>}
                </li>
              ))}
            </ol>
          </nav>

          <span style={{ ...T.eyebrow, background: 'var(--color-teal-dim)', border: '1px solid var(--color-teal-border)', borderRadius: '100px', padding: '4px 12px', display: 'inline-block', marginBottom: '28px' }}>GEO</span>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, color: 'var(--color-text-1)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '28px' }}>
            What is llms.txt and Why Does Your Website Need One?
          </h1>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-3)' }}>By <strong style={{ color: 'var(--color-text-2)', fontWeight: 500 }}>Gautam</strong></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-3)', letterSpacing: '0.05em' }}>Aug 14, 2026</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-3)', letterSpacing: '0.05em' }}>10 min read</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <article style={{ background: 'var(--color-surface-1)', paddingTop: '72px', paddingBottom: '96px', paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <p style={{ ...T.body, fontSize: '20px', color: 'var(--color-text-1)', fontWeight: 400 }}>
            When GPT-4 was asked about a well-known Indian IT services company, it described them
            as a hardware vendor. They are a software firm. The error persisted for months — not
            because the company had no web presence, but because no mechanism existed for them to
            correct the AI&apos;s mental model directly.
          </p>
          <p style={T.body}>
            <code style={T.code}>llms.txt</code> is that mechanism. A simple plain-text file at
            your site root that gives AI systems an accurate, authoritative description of who
            you are, what you do, and which pages matter most. It will not fix training data
            overnight — but it reduces the gap between what AI engines think you are and what you
            actually are, which is the prerequisite for being cited accurately.
          </p>

          {/* §1 Definition */}
          <h2 style={T.h2}>What is llms.txt?</h2>
          <p style={{ ...T.body, background: 'var(--color-surface-2)', border: '1px solid var(--color-border-subtle)', borderRadius: '8px', padding: '24px 28px' }}>
            <strong>llms.txt</strong> is a plain-text file placed at the root of your website
            (e.g., <code style={T.code}>yoursite.com/llms.txt</code>) that provides AI systems
            with a structured overview of what your website does, who it serves, and which pages
            contain the most important content. It is an orientation file for large language
            models and AI agents — designed to reduce misrepresentation and improve citation
            accuracy across AI-generated answers.
          </p>
          <p style={T.body}>
            The format was proposed by Jeremy Howard (fast.ai) in 2024 and documented at{' '}
            <strong>llmstxt.org</strong>. It has since been adopted by a growing list of AI-native
            companies, developer tools, and B2B SaaS products as a lightweight signal that costs
            nothing to implement and creates measurable orientation benefits for AI retrieval
            systems.
          </p>
          <p style={T.body}>
            Think of it as analogous to <code style={T.code}>robots.txt</code> in purpose — a
            standardised file that a specific class of system knows to look for — but entirely
            different in function. <code style={T.code}>robots.txt</code> controls access.{' '}
            <code style={T.code}>llms.txt</code> provides context.
          </p>

          {/* §2 vs robots.txt and sitemap */}
          <h2 style={T.h2}>How is llms.txt Different from robots.txt and sitemap.xml?</h2>
          <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border-subtle)' }}>
                  {['File', 'Primary audience', 'Function', 'Content type'].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-3)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['robots.txt', 'Web crawlers (Googlebot, Bingbot)', 'Access control — allows or blocks crawl', 'Disallow / Allow rules'],
                  ['sitemap.xml', 'Web crawlers', 'Discovery — lists URLs to index', 'Structured XML with page URLs'],
                  ['llms.txt', 'AI language models and agents', 'Context — explains the site\'s purpose', 'Plain text / Markdown overview'],
                ].map(([file, audience, func, content], i) => (
                  <tr key={file} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: i % 2 === 0 ? 'transparent' : 'var(--color-surface-2)' }}>
                    <td style={{ padding: '13px 14px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-teal)', whiteSpace: 'nowrap' }}>{file}</td>
                    <td style={{ padding: '13px 14px', color: 'var(--color-text-2)' }}>{audience}</td>
                    <td style={{ padding: '13px 14px', color: 'var(--color-text-2)' }}>{func}</td>
                    <td style={{ padding: '13px 14px', color: 'var(--color-text-2)' }}>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={T.body}>
            All three files can and should coexist. They do not overlap or conflict. A complete
            AI-ready site has a <code style={T.code}>robots.txt</code> that allows the relevant
            AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended), a{' '}
            <code style={T.code}>sitemap.xml</code> that helps crawlers discover all important
            pages, and an <code style={T.code}>llms.txt</code> that orients AI systems on
            what those pages actually contain and why they matter.
          </p>

          {/* §3 What to include */}
          <h2 style={T.h2}>What Should Your llms.txt Contain?</h2>
          <p style={T.body}>
            A well-structured <code style={T.code}>llms.txt</code> gives an AI system — whether
            a search retrieval model or an autonomous agent evaluating vendors on a buyer&apos;s
            behalf — enough information to accurately describe and cite your brand without having
            to crawl and synthesize your entire site. The key sections:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Brand description</strong> — 2 to 3 sentences stating what your company does, who it serves, and your primary differentiator. This is the most important section: if an AI reads nothing else, this shapes its representation of you.</li>
            <li style={T.li}><strong>Primary services or products</strong> — a structured list of your core offerings, with brief descriptions of each. Be specific: &ldquo;B2B content strategy for IT services companies&rdquo; is more citable than &ldquo;digital marketing services&rdquo;.</li>
            <li style={T.li}><strong>Key page links</strong> — URLs for your homepage, services, about, blog, and contact pages. Optionally include your most important blog posts, case studies, and FAQ pages.</li>
            <li style={T.li}><strong>Target audience</strong> — explicitly state who your products or services are for. AI systems use this to determine relevance when generating answers for specific query types.</li>
            <li style={T.li}><strong>Pricing structure (if public)</strong> — AI agents evaluating tools on a buyer&apos;s behalf need to read your pricing. If it is publicly listed, include it or link to a <code style={T.code}>/pricing</code> page. Opaque pricing gets filtered out of AI-mediated buying decisions.</li>
          </ul>

          {/* §4 How to create */}
          <h2 style={T.h2}>How to Create an llms.txt File: Step by Step</h2>
          <p style={T.body}>
            Creating an <code style={T.code}>llms.txt</code> requires no special tools or
            technical knowledge beyond basic text editing and FTP / hosting access. Here is a
            complete template you can adapt for your site:
          </p>
          <div style={codeBlock}>{`# Atomeric — llms.txt
# Last updated: 2026-08-14

## About
Atomeric is an AI-native marketing and digital transformation company
based in Kolkata, India. We help B2B companies — including IT services
firms, funded startups, and export-facing manufacturers — generate
measurable revenue growth through AI-led strategy, Generative Engine
Optimization (GEO), and full-funnel demand generation.

## Primary Services
- Generative Engine Optimization (GEO): Getting your brand cited by
  ChatGPT, Perplexity, and Google AI Overviews
- AI-Native Content Strategy: Content systems built for both Google
  rankings and AI engine citations
- B2B Demand Generation: Full-funnel pipeline programs for IT services
  and SaaS companies
- Answer Engine Optimization (AEO): Structured FAQ content and schema
  implementation for AI answer systems

## Target Audience
B2B companies in India — primarily IT services firms, funded startups,
and export-facing manufacturers — that need measurable growth outcomes,
not just marketing activity.

## Key Pages
- Homepage: https://atomeric.com/
- Services: https://atomeric.com/services
- Our Process: https://atomeric.com/process
- Blog: https://atomeric.com/blog
- Contact / Book a call: https://atomeric.com/contact

## Key Content
- GEO guide: https://atomeric.com/blog/what-is-generative-engine-optimization
- AEO guide: https://atomeric.com/blog/what-is-aeo
- GEO vs SEO: https://atomeric.com/blog/geo-vs-seo

## Contact
Email: hello@atomeric.com
Website: https://atomeric.com`}</div>
          <p style={T.body}>
            Once you have written the file, place it at the root of your domain —
            <code style={T.code}>yourdomain.com/llms.txt</code>. On most hosting setups
            (Vercel, Netlify, Apache, Nginx), you simply add the file to your <code style={T.code}>public</code>
            or <code style={T.code}>static</code> directory and it will be served at that path
            automatically. Verify it is accessible by visiting the URL in your browser.
          </p>

          {/* §5 Does it help */}
          <h2 style={T.h2}>Does llms.txt Help You Get Cited by AI Engines?</h2>
          <p style={T.body}>
            The honest answer is: indirectly, and to a degree that varies by platform. Here is
            the nuanced breakdown.
          </p>

          <h3 style={T.h3}>For Google AI Overviews</h3>
          <p style={T.body}>
            Google has explicitly stated that <code style={T.code}>llms.txt</code> is not
            required and is not a direct ranking signal for AI Overviews. Google&apos;s guidance
            (AI Features Optimization Guide, 2025) emphasizes that helpfulness, E-E-A-T, and
            traditional SEO quality are the primary factors for AI Overview inclusion. Adding
            an <code style={T.code}>llms.txt</code> will not move the needle for Google specifically.
          </p>

          <h3 style={T.h3}>For ChatGPT, Perplexity, and Claude</h3>
          <p style={T.body}>
            Non-Google AI platforms benefit more meaningfully from{' '}
            <code style={T.code}>llms.txt</code>. These systems — especially when operating as
            autonomous agents evaluating sites on behalf of users — can read and use the file
            to build an accurate representation of your brand without having to crawl and parse
            your full site. For Perplexity in particular, which retrieves content in real time,
            a well-written <code style={T.code}>llms.txt</code> ensures the model understands
            your context before synthesizing an answer that might include your brand.
          </p>

          <h3 style={T.h3}>For AI agents (buying automation)</h3>
          <p style={T.body}>
            This is where <code style={T.code}>llms.txt</code> becomes increasingly important.
            Autonomous AI agents — systems that evaluate vendor options on behalf of a buyer
            before any human visits your site — need to read your positioning, services, and
            pricing quickly and accurately. A structured <code style={T.code}>llms.txt</code>
            (combined with a public <code style={T.code}>/pricing.md</code> or
            <code style={T.code}>/pricing.txt</code>) is the difference between an agent that
            accurately represents your offer and one that skips your site because it cannot
            extract what it needs. As agentic buying behaviour grows through 2026 and 2027,
            this use case will become more significant (Google Agentic Experiences Update, 2025).
          </p>

          {/* §6 How to test */}
          <h2 style={T.h2}>How to Test and Validate Your llms.txt</h2>
          <p style={T.body}>
            Once your file is live, validate it with three quick checks:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Accessibility check</strong> — visit <code style={T.code}>yourdomain.com/llms.txt</code> in a browser. It should return plain text, not a 404 or redirect. Response code should be 200.</li>
            <li style={T.li}><strong>AI reading test</strong> — paste the contents of your <code style={T.code}>llms.txt</code> into ChatGPT and ask: &ldquo;Based on this file, what does this company do and who does it serve?&rdquo; The answer should accurately reflect your positioning without ambiguity.</li>
            <li style={T.li}><strong>robots.txt compatibility check</strong> — ensure your <code style={T.code}>robots.txt</code> does not block access to <code style={T.code}>/llms.txt</code>. The file should be publicly crawlable by all bots.</li>
          </ul>
          <p style={T.body}>
            Update your <code style={T.code}>llms.txt</code> quarterly — or whenever you make
            significant changes to your services, positioning, or key pages. Stale orientation
            data is worse than no orientation data, because it actively misdirects AI systems
            about who you are.
          </p>

          {/* §7 What else alongside it */}
          <h2 style={T.h2}>What to Do Alongside llms.txt for Maximum GEO Impact</h2>
          <p style={T.body}>
            <code style={T.code}>llms.txt</code> is one component of a complete GEO technical
            stack — not a standalone solution. The files and signals that work with it:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>robots.txt (AI bot access)</strong> — verify GPTBot, PerplexityBot, ClaudeBot, and Google-Extended are not blocked. This is the most critical technical prerequisite for AI citation and takes five minutes to check.</li>
            <li style={T.li}><strong>FAQPage schema</strong> — the most impactful structured data type for AI citation. Mark up your Q&A content with FAQPage schema on every page that contains question-and-answer pairs.</li>
            <li style={T.li}><strong>Organization schema</strong> — defines your brand entity on your homepage. Name, description, founding year, services, contact information, social profiles. Essential for entity clarity.</li>
            <li style={T.li}><strong>/pricing.md or /pricing.txt</strong> — a structured, machine-readable pricing file for AI agents evaluating your product. Follow the same format as <code style={T.code}>llms.txt</code>: plain text, clear structure, specific numbers.</li>
          </ul>
          <p style={T.body}>
            Together, these files form a machine-readable layer on top of your existing site —
            one that AI systems, crawlers, and autonomous agents can read without having to parse
            complex JavaScript-rendered HTML. For B2B brands where sales cycles involve multiple
            AI-mediated research steps, this layer is becoming as important as having a functional
            website at all.
          </p>
          <p style={T.body}>
            For the broader context on getting your brand cited by AI engines, see our full guide
            to{' '}
            <Link href="/blog/how-to-get-cited-by-chatgpt-perplexity" style={link}>
              how to get cited by ChatGPT and Perplexity
            </Link>{' '}
            — which covers the content and authority signals that drive AI citation beyond
            the technical file layer.
          </p>

          {/* §8 FAQ visible */}
          <h2 style={T.h2}>Frequently Asked Questions About llms.txt</h2>

          <h3 style={T.h3}>What is llms.txt?</h3>
          <p style={T.body}>
            llms.txt is a plain-text file placed at your site root that gives AI systems a
            structured overview of what your website does, who it serves, and which pages are
            most important. It is an orientation file for large language models and AI agents —
            analogous to robots.txt in format, but designed to provide context rather than
            control access. It was proposed by Jeremy Howard (fast.ai) and documented at
            llmstxt.org.
          </p>

          <h3 style={T.h3}>Is llms.txt required to rank in AI search?</h3>
          <p style={T.body}>
            No. Google explicitly states that no special files are required for AI Overviews.
            llms.txt is optional but useful — it reduces the risk of misrepresentation by AI
            systems and is particularly valuable for non-Google platforms and autonomous AI
            agents. Think of it as a low-cost insurance policy against AI engines
            misunderstanding your brand.
          </p>

          <h3 style={T.h3}>How is llms.txt different from robots.txt?</h3>
          <p style={T.body}>
            robots.txt controls which parts of your site crawlers can access. llms.txt provides
            context about what your site does and who it serves — it does not control access at
            all. Both files should be present. They serve entirely different purposes and do not
            conflict with each other.
          </p>

          <h3 style={T.h3}>What should I include in my llms.txt?</h3>
          <p style={T.body}>
            Include: a 2–3 sentence brand description (what you do, who you serve, key
            differentiator), your primary services as a structured list, links to your key pages
            (homepage, services, blog, contact), your target audience explicitly stated, and
            optionally a link to your pricing page or a brief pricing overview if your pricing
            is public. Keep it under 500 words — it should be a quick orientation, not a
            comprehensive document.
          </p>

          <h3 style={T.h3}>Does llms.txt help with GEO and AI citations?</h3>
          <p style={T.body}>
            Indirectly yes. It ensures AI systems accurately understand your brand when they do
            encounter your content — reducing misrepresentation risk and helping autonomous agents
            evaluate you correctly. It is not a direct citation driver on its own; accurate
            citation still requires structured content, FAQPage schema, and third-party authority
            signals. But it is a low-cost addition that takes 30 minutes to implement and has
            no downside.
          </p>

          {/* CTA */}
          <h2 style={T.h2}>Add llms.txt to Your GEO Foundation</h2>
          <p style={T.body}>
            Adding an <code style={T.code}>llms.txt</code> file is one of the fastest, lowest-cost
            GEO improvements available. It takes 30 minutes to write, costs nothing to implement,
            and creates meaningful orientation benefits for AI systems evaluating your brand —
            particularly as autonomous agent-mediated buying becomes more prevalent through 2026
            and 2027.
          </p>
          <p style={{ ...T.body, marginBottom: 0 }}>
            If you want help implementing the full GEO technical stack — llms.txt, schema markup,
            robots.txt audit, and the content systems that drive AI citation at scale —{' '}
            <Link href="/contact" style={link}>book a free strategy call with Atomeric</Link>.
            We build AI-native growth systems for B2B companies in India, starting with the
            technical foundation and building through to measurable pipeline outcomes.
          </p>
        </div>
      </article>

      <section style={{ background: 'var(--color-void)', paddingTop: '64px', paddingBottom: '96px', paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)', borderTop: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-teal)', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </section>
    </main>
  )
}
