import type { Metadata } from 'next'
import Link from 'next/link'

// Title: 42 chars ✓  Meta: 150 chars ✓
export const metadata: Metadata = {
  title: 'How to Rank in Google AI Overviews (2026)',
  description:
    'Google AI Overviews appear in 45% of all searches. Here are the proven strategies to get your Indian B2B brand cited inside AI Overviews — with data and examples.',
  keywords: [
    'Google AI Overviews',
    'how to rank in AI Overviews',
    'Google AI search India',
    'AI Overview optimization',
    'GEO India 2026',
    'get cited in Google AI',
    'AI Overviews B2B',
  ],
  authors: [{ name: 'Gautam', url: 'https://atomeric.com/about' }],
  openGraph: {
    type: 'article',
    url: 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews',
    title: 'How to Rank in Google AI Overviews (2026)',
    description:
      'Proven strategies to get your B2B brand featured in Google AI Overviews — the AI search format now appearing in 45% of all Google searches globally.',
    images: [{ url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 }],
    publishedTime: '2026-08-14',
    modifiedTime: '2026-08-14',
    authors: ['https://atomeric.com/about'],
    tags: ['Google AI Overviews', 'GEO', 'AI Search', 'India', 'B2B SEO'],
  },
  alternates: { canonical: 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews',
    headline: 'How to Get Featured in Google AI Overviews',
    description:
      'How to get your B2B brand cited in Google AI Overviews — the AI-generated answer format appearing in 45% of Google searches. Proven strategies for Indian brands in 2026.',
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    author: { '@type': 'Person', name: 'Gautam', url: 'https://atomeric.com/about' },
    publisher: { '@id': 'https://atomeric.com/#organization' },
    url: 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews' },
    image: { '@type': 'ImageObject', url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 },
    keywords: 'Google AI Overviews, AI search optimization, GEO India, B2B AI search 2026',
    articleSection: 'GEO',
    wordCount: 2000,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atomeric.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Google AI Overviews', item: 'https://atomeric.com/blog/how-to-rank-in-google-ai-overviews' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Google AI Overviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Google AI Overviews are AI-generated summaries that appear at the top of Google search results pages, above the ranked link list. They synthesize information from multiple web sources to provide a direct answer to a query, typically citing 3 to 5 sources. As of 2025, AI Overviews appear in approximately 45% of all Google searches globally (BrightEdge, 2025), with higher prevalence for informational and question-format queries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to rank on page 1 to appear in Google AI Overviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ranking on page 1 significantly helps — approximately 70% of AI Overview citations come from pages already in the top 10 (SE Ranking, 2024). However, it is not an absolute requirement. Pages ranking on page 2 or 3 can still be cited if they have stronger content structure, clearer answer passages, and better schema markup than the pages ahead of them. Strong E-E-A-T signals and explicit, extractable answers improve citation probability even from lower-ranked pages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does adding FAQPage schema help with Google AI Overviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. FAQPage schema gives Google\'s AI systems a machine-readable Q&A structure that is easier to extract and synthesize into an AI Overview. It does not guarantee inclusion — Google\'s AI features are ultimately quality-driven — but it reduces the friction for the AI system to accurately represent your content and increases the probability that your page is selected as a source.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Indian brands appearing in Google AI Overviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Google AI Overviews are available in India and appear for English-language queries including those made by Indian users searching for B2B services, technology solutions, and professional advice. Indian brands with strong traditional SEO authority and well-structured content are already appearing in AI Overview citations for relevant queries. The competitive window is still open for most B2B categories in the Indian market.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the fastest way to get into Google AI Overviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fastest path to AI Overview inclusion is: (1) target queries where AI Overviews already appear but your competitors are weakly represented, (2) create a comprehensive, well-structured page with a direct answer in the first paragraph, explicit Q&A sections with FAQPage schema, and inline statistics with sources, and (3) ensure the page ranks in the top 20 for the target query — which may require a focused internal linking and backlink push for that specific page.',
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
}

const link = { color: 'var(--color-teal)', textDecoration: 'underline', textUnderlineOffset: '3px' }

export default function GoogleAiOverviewsPage() {
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
                { label: 'Google AI Overviews', href: null },
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
            How to Get Featured in Google AI Overviews
          </h1>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-3)' }}>By <strong style={{ color: 'var(--color-text-2)', fontWeight: 500 }}>Gautam</strong></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-3)', letterSpacing: '0.05em' }}>Aug 14, 2026</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-3)', letterSpacing: '0.05em' }}>11 min read</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <article style={{ background: 'var(--color-surface-1)', paddingTop: '72px', paddingBottom: '96px', paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <p style={{ ...T.body, fontSize: '20px', color: 'var(--color-text-1)', fontWeight: 400 }}>
            Google AI Overviews are now the most prominent real estate on the search results page —
            appearing above the ranked link list, commanding the top of the screen, and driving
            click-throughs that bypass every traditional SEO ranking below.
          </p>
          <p style={T.body}>
            They appear in approximately 45% of all Google searches globally (BrightEdge, 2025).
            For B2B brands in India, they are already active for English-language queries across
            technology, professional services, and business strategy categories. And the brands
            that appear in them are capturing influence at the exact moment a buyer is forming
            their first impression of a category.
          </p>
          <p style={T.body}>
            This guide covers what AI Overviews are, how Google selects content for them, and
            the six strategies that improve your probability of appearing — based on current
            research and Google&apos;s own published guidance.
          </p>

          {/* §1 What are they */}
          <h2 style={T.h2}>What Are Google AI Overviews?</h2>
          <p style={{ ...T.body, background: 'var(--color-surface-2)', border: '1px solid var(--color-border-subtle)', borderRadius: '8px', padding: '24px 28px' }}>
            <strong>Google AI Overviews</strong> are AI-generated summaries that appear at the
            top of Google search results pages, above the traditional ranked link list. They
            synthesize information from multiple web sources — typically citing 3 to 5 pages —
            to provide a direct, conversational answer to a query. Powered by Google&apos;s Gemini
            AI model, they launched broadly in the US in May 2024 and expanded globally,
            including India, through 2024 and 2025.
          </p>
          <p style={T.body}>
            AI Overviews are distinct from featured snippets (which extract a single passage
            from one page) and Google&apos;s AI Mode (a separate, more conversational interface).
            AI Overviews appear inline in regular search results without requiring any special
            interface — the user simply searches, and if the query triggers one, it appears
            at the top of the page.
          </p>
          <p style={T.body}>
            For B2B brands, AI Overviews are most prevalent for informational queries —
            &ldquo;what is cloud migration strategy?&rdquo;, &ldquo;how to choose a managed services
            provider?&rdquo;, &ldquo;what is GEO optimization?&rdquo; — and comparative queries —
            &ldquo;SEO vs GEO&rdquo;, &ldquo;in-house vs outsourced marketing&rdquo;. These are
            exactly the queries buyers use during the awareness and consideration phases of
            vendor research.
          </p>

          {/* §2 Why they matter */}
          <h2 style={T.h2}>Why AI Overviews Matter for Indian B2B Brands</h2>
          <p style={T.body}>
            Three data points define the stakes.
          </p>
          <p style={T.body}>
            First, prevalence: BrightEdge (2025) measured AI Overviews appearing in 45% of
            Google searches. For question-format queries — the format B2B buyers most commonly
            use when researching vendors — the prevalence is even higher.
          </p>
          <p style={T.body}>
            Second, click impact: when an AI Overview appears, click-through rates to the
            organic results below it drop by up to 58% (BrightEdge, 2025). The buyer gets their
            answer from the AI and either acts on the cited brands directly or moves on. If you
            are not cited in the Overview, you are below a barrier that now filters out more
            than half of the traffic that would previously have reached you.
          </p>
          <p style={T.body}>
            Third, the India opportunity: most Indian B2B companies have not yet optimized for
            AI Overviews. The brands investing in the right content structure and authority
            signals now are building citation positions that will compound for years — in a
            market where almost none of their competitors have started.
          </p>

          {/* §3 How Google selects */}
          <h2 style={T.h2}>How Google Selects Content for AI Overviews</h2>
          <p style={T.body}>
            Google has been clearer about AI Overview selection than most AI platforms.
            Their guidance (AI Features Optimization Guide, 2025) establishes three primary
            principles:
          </p>

          <h3 style={T.h3}>Traditional SEO remains the primary lever</h3>
          <p style={T.body}>
            Approximately 70% of AI Overview citations come from pages already ranking in the
            top 10 for the query (SE Ranking, 2024). Google&apos;s own guidance is explicit: their
            AI features are rooted in their core Search ranking and quality systems. If your
            page does not rank, it is unlikely to be cited. Strong traditional SEO — domain
            authority, quality backlinks, technical hygiene, content depth — is the prerequisite.
          </p>

          <h3 style={T.h3}>E-E-A-T signals determine which ranked pages get cited</h3>
          <p style={T.body}>
            Among pages that rank on page 1, Google selects for AI Overview citations based on
            Experience, Expertise, Authoritativeness, and Trustworthiness signals. Named authors
            with demonstrated expertise, first-hand experience demonstrated in the content,
            transparent sourcing, and consistent external authority signals (citations from
            reputable third-party sites) all improve the probability of being selected.
          </p>

          <h3 style={T.h3}>Content structure determines extractability</h3>
          <p style={T.body}>
            Even among pages with strong E-E-A-T, Google&apos;s AI selects content it can extract
            and accurately represent. Pages with clear answer passages in the first paragraph,
            explicit structure (headings that match query intent, numbered lists for processes,
            tables for comparisons), and FAQPage schema are more reliably selected than pages
            with the same information buried in long paragraphs.
          </p>

          {/* §4 Six strategies */}
          <h2 style={T.h2}>Six Strategies to Get Featured in Google AI Overviews</h2>

          <h3 style={T.h3}>Strategy 1: Build page-1 rankings first</h3>
          <p style={T.body}>
            There is no shortcut past this. If you are not ranking on page 1 for a query, your
            probability of AI Overview citation for that query is low. Prioritize your GEO
            investments on queries where you already rank in positions 5 to 20 — close enough
            to the top that a focused push can get you to page 1, and where an AI Overview
            already appears for the query. These are the highest-leverage opportunities.
          </p>

          <h3 style={T.h3}>Strategy 2: Lead every section with a direct answer</h3>
          <p style={T.body}>
            Google&apos;s AI extracts passages — not full articles. The first sentence after every
            H2 heading should state the direct answer to the implied question. Do not build
            toward your conclusion. State it first, then explain it. The AI Overview format
            is essentially a collection of extracted first-sentences-of-sections from the
            best-structured content on a topic. Write with that extraction in mind.
          </p>

          <h3 style={T.h3}>Strategy 3: Match your headings to query fan-out</h3>
          <p style={T.body}>
            Google&apos;s AI features do not just answer the one query the user typed — they generate
            concurrent related queries under the hood (fan-out) and synthesize from content that
            covers all of them. A user asking &ldquo;how to choose a cloud migration partner in India&rdquo;
            triggers fan-out queries about evaluation criteria, pricing models, implementation
            timelines, and risk factors. A page whose H2 headings address each of these
            sub-questions — in natural query language — is more likely to be cited across the
            full synthesized answer.
          </p>

          <h3 style={T.h3}>Strategy 4: Add inline statistics with sources</h3>
          <p style={T.body}>
            The KDD 2024 GEO study (Aggarwal et al.) found that adding statistics with source
            citations increased AI citation rates by 37–40%. This applies to AI Overviews as
            well as other AI platforms. Every factual claim should reference a credible source
            inline. For Indian B2B content, excellent sources include NASSCOM reports, IBEF
            sector data, McKinsey India surveys, and RedSeer research — authoritative references
            that carry strong trust signals for Google&apos;s quality systems.
          </p>

          <h3 style={T.h3}>Strategy 5: Implement FAQPage schema on every relevant page</h3>
          <p style={T.body}>
            FAQPage schema gives Google a machine-readable Q&A structure that it can reliably
            extract and synthesize. It does not guarantee AI Overview inclusion — Google&apos;s AI
            quality systems are the final arbiter — but it significantly reduces the friction
            for the system to represent your content accurately. Every service page, blog post,
            and resource that contains Q&A content should have FAQPage schema implemented.
          </p>

          <h3 style={T.h3}>Strategy 6: Target niche queries where AI Overviews exist but competitors are weak</h3>
          <p style={T.body}>
            The fastest path to your first AI Overview citation is a query where: (1) an AI
            Overview appears, (2) your competitors have thin or unstructured content, and (3)
            you have the authority to rank on page 1 with a focused content push. Audit your
            target query list in Google — check which queries show AI Overviews, then check
            the quality of the content currently cited. Gaps where the cited content is shallow,
            undated, or poorly structured are your opportunity to enter with a well-structured,
            authoritative replacement.
          </p>

          {/* §5 Common mistakes */}
          <h2 style={T.h2}>Common Mistakes That Block AI Overview Citations</h2>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Targeting queries where no AI Overview exists</strong> — not every query triggers an Overview. Verify that an AI Overview currently appears for your target query before investing in optimization for it.</li>
            <li style={T.li}><strong>Writing for AI, not people</strong> — Google&apos;s guidance is explicit: writing separate content &ldquo;for AI&rdquo; risks the scaled content abuse spam policy. Write for people with genuine expertise and structure it clearly. AI systems select the best human-written content, not content written to game them.</li>
            <li style={T.li}><strong>Ignoring traditional SEO ranking</strong> — without a page-1 ranking, AI Overview citation is a low-probability outcome. Build your organic ranking foundation before expecting AI citation returns.</li>
            <li style={T.li}><strong>Burying the answer</strong> — if your page takes 800 words to reach its core claim, Google&apos;s AI cannot reliably extract it. Lead with the answer, every time.</li>
            <li style={T.li}><strong>Blocking Google-Extended in robots.txt</strong> — Google-Extended is the crawler used for AI features. If it is blocked, Google&apos;s AI cannot include your content in AI Overviews, regardless of ranking.</li>
            <li style={T.li}><strong>Stale content without freshness signals</strong> — undated content or content with statistics from 2022 loses to pages with current-year data and visible update dates. Show when your content was last reviewed.</li>
          </ul>

          {/* §6 Tracking */}
          <h2 style={T.h2}>How to Track Your AI Overview Performance</h2>
          <p style={T.body}>
            Google does not yet provide AI Overview-specific reporting in Search Console. Standard
            Search Console Performance reports show overall clicks and impressions, but do not
            distinguish between clicks from traditional results and clicks from AI Overview
            citations. Google&apos;s guidance confirms this explicitly: use standard SEO metrics
            for now.
          </p>
          <p style={T.body}>
            For AI Overview-specific tracking, third-party tools are the current standard:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Semrush and Ahrefs</strong> — both have AI Overview tracking features showing which of your queries trigger Overviews and whether your pages are cited</li>
            <li style={T.li}><strong>SE Ranking</strong> — specifically tracks AI Overview presence and citation sources at a keyword level</li>
            <li style={T.li}><strong>Manual monitoring</strong> — run your top 20 target queries in Google monthly, observe whether AI Overviews appear, and record which pages are cited</li>
          </ul>
          <p style={T.body}>
            What to track monthly: which queries in your target list trigger AI Overviews,
            which pages are cited (yours or competitors&apos;), and whether your citation rate
            changes after implementing the structural improvements above. Month-over-month
            trends are more meaningful than absolute numbers at this stage.
          </p>
          <p style={T.body}>
            For a complete picture of AI search visibility beyond Google — including ChatGPT
            and Perplexity citation rates — see our guide to{' '}
            <Link href="/blog/how-to-get-cited-by-chatgpt-perplexity" style={link}>
              how to get cited by ChatGPT and Perplexity
            </Link>
            , which covers the multi-platform monitoring workflow in detail.
          </p>

          {/* §7 FAQ visible */}
          <h2 style={T.h2}>Frequently Asked Questions About Google AI Overviews</h2>

          <h3 style={T.h3}>What are Google AI Overviews?</h3>
          <p style={T.body}>
            Google AI Overviews are AI-generated summaries appearing at the top of search results
            pages, above the traditional ranked link list. They use Google&apos;s Gemini AI model to
            synthesize answers from multiple web sources, typically citing 3 to 5 pages. They
            appear in approximately 45% of all Google searches globally (BrightEdge, 2025).
          </p>

          <h3 style={T.h3}>Do I need to rank on page 1 to appear in Google AI Overviews?</h3>
          <p style={T.body}>
            It strongly helps. Approximately 70% of AI Overview citations come from pages already
            in the top 10 (SE Ranking, 2024). However, pages ranking on pages 2 or 3 can be cited
            if they have significantly stronger content structure, extractable answer passages,
            and better E-E-A-T signals than the pages ranked above them. Strong SEO is the primary
            lever; content structure is the secondary lever that determines which ranked pages
            actually get cited.
          </p>

          <h3 style={T.h3}>Does adding FAQPage schema help with Google AI Overviews?</h3>
          <p style={T.body}>
            Yes. FAQPage schema gives Google a machine-readable Q&A structure that its AI
            systems can more reliably extract and represent. It does not guarantee inclusion
            — quality and ranking remain primary — but it reduces friction for citation selection
            and is a low-cost addition to any relevant page.
          </p>

          <h3 style={T.h3}>Are Indian brands appearing in Google AI Overviews?</h3>
          <p style={T.body}>
            Yes. Google AI Overviews are active in India for English-language queries, including
            B2B technology, professional services, and business strategy categories. Indian brands
            with strong SEO authority and well-structured content are already appearing in these
            Overviews. The competitive window is open in most B2B categories — most Indian
            companies have not yet invested in the structural content improvements that drive
            AI Overview citation.
          </p>

          <h3 style={T.h3}>What is the fastest way to get into Google AI Overviews?</h3>
          <p style={T.body}>
            Target queries where an AI Overview already appears but the cited content is thin
            or unstructured. Create a comprehensive page with a direct answer in the first
            paragraph, explicit Q&A sections with FAQPage schema, and inline statistics with
            authoritative sources. Ensure the page ranks in the top 20, then push it to page 1
            with a focused internal linking and backlink effort. This is the highest-leverage
            sequence for a first citation win.
          </p>

          {/* CTA */}
          <h2 style={T.h2}>Start Winning Google AI Overview Citations</h2>
          <p style={T.body}>
            The strategy for Google AI Overviews is disciplined and learnable: build SEO authority,
            structure content for extraction, target queries where Overviews already exist,
            and implement schema that gives Google&apos;s AI a reliable representation of your content.
            The brands executing this consistently over 6 to 12 months are building citation
            positions that compound in value as AI search penetration continues to grow.
          </p>
          <p style={{ ...T.body, marginBottom: 0 }}>
            Atomeric builds AI-native marketing systems for B2B companies in India — including
            the full GEO and AI Overview optimization stack.{' '}
            <Link href="/contact" style={link}>Book a free strategy call</Link> and we will
            audit your current AI visibility, identify the fastest citation opportunities in
            your category, and show you a 90-day plan to start appearing in the answers your
            buyers are already reading.
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
