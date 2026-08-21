import type { Metadata } from 'next'
import Link from 'next/link'

// Title: 44 chars ✓  Meta: 137 chars ✓
export const metadata: Metadata = {
  title: 'How to Get Cited by ChatGPT & Perplexity',
  description:
    'A practical step-by-step guide to getting your Indian brand cited by ChatGPT, Perplexity, and Google AI Overviews in 2026.',
  keywords: [
    'how to get cited by ChatGPT',
    'how to get cited by Perplexity AI',
    'GEO optimization',
    'AI citation strategy',
    'get cited by AI engines',
    'AI search visibility India',
    'llms.txt',
  ],
  authors: [{ name: 'Gautam', url: 'https://atomeric.com/about' }],
  openGraph: {
    type: 'article',
    url: 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity',
    title: 'How to Get Cited by ChatGPT & Perplexity',
    description:
      'Six proven steps to get your Indian B2B brand cited by ChatGPT, Perplexity, and Google AI Overviews — with data from the Princeton GEO study.',
    images: [{ url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 }],
    publishedTime: '2026-08-14',
    modifiedTime: '2026-08-14',
    authors: ['https://atomeric.com/about'],
    tags: ['AI Citation', 'GEO', 'ChatGPT', 'Perplexity', 'AI Search India'],
  },
  alternates: { canonical: 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity',
    headline: 'How to Get Your Website Cited by ChatGPT and Perplexity',
    description:
      'Six proven steps to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews — based on research and practical GEO implementation for Indian B2B brands.',
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    author: { '@type': 'Person', name: 'Gautam', url: 'https://atomeric.com/about' },
    publisher: { '@id': 'https://atomeric.com/#organization' },
    url: 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity' },
    image: { '@type': 'ImageObject', url: 'https://atomeric.com/og-image.jpg', width: 1200, height: 630 },
    keywords: 'get cited by ChatGPT, Perplexity citation, GEO, AI search, llms.txt',
    articleSection: 'GEO',
    wordCount: 2100,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atomeric.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Get Cited by ChatGPT & Perplexity', item: 'https://atomeric.com/blog/how-to-get-cited-by-chatgpt-perplexity' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I check if ChatGPT is citing my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ask ChatGPT directly: "What are the best [your category] companies in [your market]?" or "Who are experts in [your service]?" and see if your brand appears. For systematic tracking, use tools like Peec AI, Otterly AI, or ZipTie, which monitor AI citation frequency across ChatGPT, Perplexity, Google AI Overviews, and Claude automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get cited by Perplexity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Perplexity uses real-time web retrieval, so changes to your content and schema can show effects faster than pre-training-dependent systems. With the right structured content (explicit FAQs, statistics with sources, clear definition blocks), early citations in niche queries can appear within 4 to 8 weeks. Consistent, broad citation typically takes 3 to 9 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my website need a special file to be cited by AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An llms.txt file helps AI engines understand your brand and key pages faster — it is a context file at your site root that provides structured information about what you do and who you serve. It is not required to be cited, but it reduces friction for AI systems to accurately represent your brand. More critically, you must not block AI crawlers (GPTBot, PerplexityBot, ClaudeBot) in your robots.txt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is schema markup required to appear in AI answers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Schema markup is not strictly required but significantly improves citation probability. FAQPage schema lets AI engines parse your Q&A content reliably. Organization schema defines your brand entity clearly. Article and BlogPosting schema establish authorship and freshness signals. Research shows structured data improves AI citation rates by 30–40% on non-Google AI platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a new Indian website get cited by AI engines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but the path is different from an established domain. New sites without existing authority should prioritize niche specificity (target narrow, under-served queries first), structured FAQ content, and early third-party citations (guest articles, NASSCOM listings, industry directories). The KDD 2024 GEO study found that low-authority sites adding citations and statistics saw up to 115% visibility improvement — a larger relative boost than high-authority sites.',
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

export default function HowToGetCitedPage() {
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
                { label: 'Get Cited by AI', href: null },
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
            How to Get Your Website Cited by ChatGPT and Perplexity
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
            In 2024, a study by Aggarwal et al. published at KDD — the ACM&apos;s flagship data science
            conference — tested nine specific interventions on content published to Perplexity.ai.
            Some interventions boosted AI citation rates by 40%. One intervention actively reduced them.
          </p>
          <p style={T.body}>
            That research is now the most rigorous public data we have on what drives AI citation.
            This guide translates its findings — combined with platform-specific mechanics for
            ChatGPT, Perplexity, and Google AI Overviews — into an actionable six-step process
            for Indian B2B brands.
          </p>

          {/* §1 Why citation matters */}
          <h2 style={T.h2}>Why AI Citation Matters More Than Rankings in 2026</h2>
          <p style={T.body}>
            The traditional SEO objective is a click. If you rank on page one of Google, users see
            your link and decide whether to visit. AI search removes that step. When a buyer asks
            Perplexity &ldquo;which cloud migration partners work with Indian manufacturing companies?&rdquo;,
            they receive a synthesized answer with two or three names embedded in the prose. They
            do not choose between ten blue links — they act on what the AI said.
          </p>
          <p style={T.body}>
            The conversion implication is significant. A 2024 study by Wynter and Sparktoro found
            that visitors arriving from Perplexity convert to leads at approximately 11 times the
            rate of organic search visitors — because they arrive with their question already
            answered and a specific brand already recommended. The AI did the pre-qualification
            work. The buyer arrives warm.
          </p>
          <p style={T.body}>
            At the same time, zero-click search — where users get their answer directly from the
            search page and never visit any website — now accounts for approximately 38% of all
            Google searches (SparkToro, 2024). For AI Overviews specifically, click-through rates
            drop by up to 58% (BrightEdge, 2025). Being cited in the answer, rather than ranked
            below it, is the only way to capture influence at this stage of the buyer&apos;s journey.
          </p>

          {/* §2 How platforms choose */}
          <h2 style={T.h2}>How ChatGPT, Perplexity, and Google AI Choose Sources</h2>

          <h3 style={T.h3}>ChatGPT (with search enabled)</h3>
          <p style={T.body}>
            ChatGPT with web search queries the broader web — not just highly-ranked pages — and
            synthesizes from a wider range of sources than Google&apos;s traditional search. It weights
            authoritative content, specific factual claims, and pages that have been cited across
            multiple sources. Because it uses retrieval-augmented generation, content published or
            updated recently has a reasonable chance of appearing even from newer domains with
            lower traditional domain authority.
          </p>

          <h3 style={T.h3}>Perplexity</h3>
          <p style={T.body}>
            Perplexity always cites sources — it is the platform most explicit about source
            attribution. It favors recent, authoritative, well-structured content and tends to
            pull from pages with clear passage-level answers to the specific query. Because it
            retrieves content in real time, updates to your site (new schema, revised content,
            added statistics) can surface in Perplexity citations faster than in platforms that
            rely primarily on training data.
          </p>

          <h3 style={T.h3}>Google AI Overviews</h3>
          <p style={T.body}>
            Google&apos;s AI Overviews correlate most strongly with traditional search rankings —
            approximately 70% of AI Overview citations come from pages that already rank in the
            top 10 for the query (SE Ranking, 2024). This means for Google specifically, strong
            traditional SEO is the primary lever. However, content structure (explicit answers,
            FAQPage schema, clear passage-level answers) meaningfully improves the probability
            of being selected for the Overview even from a top-10-ranked page.
          </p>

          {/* §3 Step 1 */}
          <h2 style={T.h2}>Step 1: Make Sure AI Bots Can Crawl Your Site</h2>
          <p style={T.body}>
            This is the most commonly overlooked GEO blocker. If your <code>robots.txt</code> blocks
            AI crawlers, those platforms simply cannot cite you — regardless of how good your
            content is. Check your robots.txt file for <code>Disallow</code> rules targeting any
            of these bots:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>GPTBot</strong> and <strong>ChatGPT-User</strong> — OpenAI&apos;s crawlers for ChatGPT</li>
            <li style={T.li}><strong>PerplexityBot</strong> — Perplexity&apos;s crawlers</li>
            <li style={T.li}><strong>ClaudeBot</strong> and <strong>anthropic-ai</strong> — Anthropic&apos;s crawlers for Claude</li>
            <li style={T.li}><strong>Google-Extended</strong> — Google&apos;s crawler for Gemini and AI Overviews</li>
            <li style={T.li}><strong>Bingbot</strong> — Microsoft&apos;s crawler for Copilot (via Bing)</li>
          </ul>
          <p style={T.body}>
            If you want to block AI <em>training</em> (to protect your content from being used in
            model training) while still allowing AI <em>citation</em> (appearing in AI search
            answers), block <strong>CCBot</strong> (Common Crawl, used for training) while
            explicitly allowing the search bots listed above. These are separate use cases with
            separate bots — you can have it both ways.
          </p>

          {/* §4 Step 2 */}
          <h2 style={T.h2}>Step 2: Structure Every Page for Passage Extraction</h2>
          <p style={T.body}>
            AI engines extract passages, not pages. A language model processing your page for
            citation purposes is looking for self-contained statements that accurately represent
            a complete answer to a query. The KDD 2024 study ranked &ldquo;fluency optimization&rdquo; —
            improving the readability and clarity of passages — as a top-tier intervention that
            boosted citation rates by 15–30%.
          </p>
          <p style={T.body}>
            Practical structural rules for every content page:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Lead every section with a direct answer</strong> — the first sentence after each H2 should state the answer to the implied question. Do not bury the conclusion in paragraph three.</li>
            <li style={T.li}><strong>Write 40–60 word answer blocks for key claims</strong> — this is the optimal length for AI extraction. Too short loses nuance; too long reduces precision.</li>
            <li style={T.li}><strong>Use H2 and H3 headings that match how people phrase queries</strong> — &ldquo;How does GEO work?&rdquo; not &ldquo;Overview of GEO Mechanics&rdquo;. Natural language headings signal the query each section answers.</li>
            <li style={T.li}><strong>One idea per paragraph</strong> — multi-point paragraphs are difficult to extract cleanly. Each paragraph should make one clear, verifiable claim.</li>
            <li style={T.li}><strong>Use tables for comparisons</strong> — structured comparison data is one of the most reliably extracted content formats across all AI platforms.</li>
          </ul>

          {/* §5 Step 3 */}
          <h2 style={T.h2}>Step 3: Add Statistics and Cite Your Sources</h2>
          <p style={T.body}>
            This is the single highest-ROI structural change for most content pages. The KDD 2024
            GEO study found that adding citations to authoritative external sources boosted citation
            rates by 40%, and adding specific statistics boosted them by 37%. For low-authority
            websites, the combined effect was even larger — up to 115% visibility improvement over
            non-optimized versions of the same content.
          </p>
          <p style={T.body}>
            What &ldquo;adding citations&rdquo; means in practice: when you make a factual claim —
            a market size, a conversion rate, a growth statistic — you immediately reference the
            source inline. Not in a footnote. Not in a bibliography. Inline, in the sentence
            itself: &ldquo;AI Overviews appear in 45% of Google searches (BrightEdge, 2025)&rdquo;.
          </p>
          <p style={T.body}>
            For Indian B2B brands, excellent primary sources to cite include: NASSCOM industry
            reports, IBEF sector data, Inc42 funding and market reports, RedSeer and Redseer
            Strategy Consultants research, and McKinsey India-specific surveys. These are
            authoritative third-party sources that carry strong signal for AI engines reasoning
            about credibility in the Indian market context.
          </p>
          <p style={T.body}>
            What the same KDD study found about keyword stuffing: it actively reduces AI citation
            rates by approximately 10%. This is meaningfully different from traditional SEO, where
            keyword overuse is merely ineffective. For GEO, it is counterproductive. Write for
            clarity and let technical terminology appear naturally — do not force keyword density.
          </p>

          {/* §6 Step 4 */}
          <h2 style={T.h2}>Step 4: Build Third-Party Presence Where AI Engines Look</h2>
          <p style={T.body}>
            Brands are 6.5 times more likely to be cited in AI-generated answers via third-party
            sources than via their own domains (KDD GEO study, 2024). This is one of the most
            counter-intuitive findings in GEO research — your own website is not the primary
            citation vector. The content about your brand on other authoritative sites is.
          </p>
          <p style={T.body}>
            The platforms that drive the most AI citations, based on citation analysis studies:
          </p>
          <ul style={{ padding: '0 0 0 24px', margin: '0 0 28px' }}>
            <li style={T.li}><strong>Wikipedia</strong> — accounts for 7.8% of all ChatGPT citations. An accurate Wikipedia article or mention is the highest single-source GEO signal available.</li>
            <li style={T.li}><strong>Reddit</strong> — accounts for 1.8% of ChatGPT citations. Authentic, substantive participation in relevant subreddits (r/IndiaStartups, r/digitaldisruption, vertical-specific communities) creates citation pathways.</li>
            <li style={T.li}><strong>Industry publications</strong> — NASSCOM, Inc42, Yourstory, Economic Times Tech, and vertical trade publications. Guest articles and expert commentary in these outlets carry significant GEO weight.</li>
            <li style={T.li}><strong>Review and directory sites</strong> — Clutch (for IT services and agencies), G2, and Capterra. AI engines cite these heavily for &ldquo;best [category]&rdquo; queries.</li>
            <li style={T.li}><strong>YouTube</strong> — frequently cited by Google AI Overviews for how-to queries. A YouTube video on a relevant topic can drive AI citation independently of your website.</li>
          </ul>

          {/* §7 Step 5 */}
          <h2 style={T.h2}>Step 5: Add llms.txt and FAQPage Schema</h2>
          <p style={T.body}>
            <strong>llms.txt</strong> is a context file at your site root (e.g.,
            <code>atomeric.com/llms.txt</code>) that gives AI engines a structured overview of
            what your brand does, who it serves, and which pages are most important. It is the
            AI-era equivalent of a <code>robots.txt</code> for guidance — not access control,
            but orientation. See our dedicated guide to{' '}
            <Link href="/blog/what-is-llms-txt" style={link}>what llms.txt is and how to write one</Link>.
          </p>
          <p style={T.body}>
            <strong>FAQPage schema</strong> is arguably the most important structured data type for
            GEO. When you mark up your question-and-answer content with FAQPage schema, you give AI
            engines a machine-readable representation of the exact Q&A format they use to generate
            answers. A page with five well-written Q&A pairs in FAQPage schema is essentially a
            training signal for how to represent your brand in a generated answer.
          </p>
          <p style={T.body}>
            Additional schema types that contribute to GEO signal: <strong>Organization</strong>
            (entity definition on your homepage), <strong>Article</strong> / <strong>BlogPosting</strong>
            (authorship and date signals), <strong>HowTo</strong> (step-by-step content extraction),
            and <strong>Product</strong> (for any product pages). Content with proper schema markup
            shows 30–40% higher AI citation rates on non-Google AI platforms (SE Ranking, 2024).
          </p>
          <p style={T.body}>
            For implementation support on schema markup across your site, see our{' '}
            <Link href="/services" style={link}>GEO and AEO services</Link> — we audit existing
            schema and implement the full structured data stack as part of our AI visibility builds.
          </p>

          {/* §8 Step 6 */}
          <h2 style={T.h2}>Step 6: Track Your AI Visibility Monthly</h2>
          <p style={T.body}>
            You cannot improve what you do not measure. The GEO measurement workflow is different
            from SEO: there is no AI-specific Google Search Console report, and keyword rankings
            do not tell you whether you are being cited in AI-generated answers.
          </p>
          <p style={T.body}>
            The DIY approach — free, requires 1 to 2 hours per month: select your top 20 target
            queries, run each through ChatGPT (with search), Perplexity, and Google (observing
            whether an AI Overview appears). Record: are you cited? Who is cited? Which specific
            page of theirs gets cited? Log this in a spreadsheet and track month-over-month.
          </p>
          <p style={T.body}>
            The tool-assisted approach — for brands where AI visibility is a strategic priority:
            Peec AI, Otterly AI, and ZipTie automate this process across multiple platforms,
            track brand citation frequency, and provide share-of-AI-voice metrics. LLMrefs
            specifically maps from traditional SEO keywords to AI citation patterns, making it
            useful for teams managing both channels simultaneously.
          </p>
          <p style={T.body}>
            What to track monthly: citation rate (are you cited at all?), share of AI voice
            (your citations vs. top competitors), citation sentiment (how does the AI describe
            you?), and which of your pages gets cited most. These four metrics give you the
            feedback loop needed to improve systematically.
          </p>

          {/* §9 FAQ visible */}
          <h2 style={T.h2}>Frequently Asked Questions</h2>

          <h3 style={T.h3}>How do I check if ChatGPT is citing my website?</h3>
          <p style={T.body}>
            Ask ChatGPT directly with queries relevant to your business: &ldquo;What are the best
            [your category] companies in [your market]?&rdquo; or &ldquo;Who are experts in [your
            service area]?&rdquo; and see if your brand appears. For systematic, automated tracking
            across ChatGPT, Perplexity, Google AI Overviews, and Claude, use Peec AI, Otterly
            AI, or ZipTie — these tools monitor citation frequency at scale and report
            share-of-AI-voice metrics.
          </p>

          <h3 style={T.h3}>How long does it take to get cited by Perplexity?</h3>
          <p style={T.body}>
            Perplexity retrieves content in real time, so structured content improvements can
            surface faster than in systems reliant on training data. With well-written FAQ content,
            inline statistics, and FAQPage schema, early citations in niche queries can appear
            within 4 to 8 weeks. Consistent, broad citation across competitive queries typically
            takes 3 to 9 months.
          </p>

          <h3 style={T.h3}>Does my website need a special file to be cited by AI?</h3>
          <p style={T.body}>
            An <code>llms.txt</code> file helps but is not required. What is required: your
            robots.txt must not block AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended).
            This is the most common blocker and the easiest to fix. Beyond access, structured
            content and FAQPage schema are the primary drivers of citation probability — not any
            single file.
          </p>

          <h3 style={T.h3}>Is schema markup required to appear in AI answers?</h3>
          <p style={T.body}>
            Not strictly required, but it significantly improves citation probability — especially
            on non-Google AI platforms. FAQPage schema in particular gives AI engines a parseable
            Q&A structure they can reliably extract and represent. Research shows 30–40% higher
            AI citation rates for content with proper structured data.
          </p>

          <h3 style={T.h3}>Can a new Indian website get cited by AI engines?</h3>
          <p style={T.body}>
            Yes. The KDD 2024 GEO study found that low-authority sites adding citations and
            statistics saw up to 115% visibility improvement — a larger relative boost than
            established sites. The path for new sites: focus on specific, narrow queries first,
            build third-party citations early (NASSCOM, Inc42, Clutch), and publish structured
            FAQ content before trying to compete on broad, high-volume terms.
          </p>

          {/* CTA */}
          <h2 style={T.h2}>Ready to Build Your AI Citation Strategy?</h2>
          <p style={T.body}>
            The six steps above form a complete GEO implementation framework. The sequence matters:
            start with access (robots.txt), build structure (content and schema), earn external
            citations, and then monitor. Brands that run all six consistently over 12 months build
            AI citation authority that is very difficult for late-moving competitors to displace.
          </p>
          <p style={{ ...T.body, marginBottom: 0 }}>
            Atomeric runs end-to-end GEO implementations for B2B brands in India — from the
            initial AI visibility audit through content production, schema implementation, and
            ongoing citation monitoring.{' '}
            <Link href="/contact" style={link}>Book a free strategy call</Link> to see
            exactly where your brand stands and what a 90-day GEO build would look like.
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
