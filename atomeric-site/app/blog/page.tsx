import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — AI Growth, GEO & Digital Strategy',
  description:
    'Insights on Generative Engine Optimization, AI-native marketing, and growth strategy for ambitious brands. Written by the team at Atomeric.',
  alternates: { canonical: 'https://atomeric.com/blog' },
  openGraph: {
    type: 'website',
    url: 'https://atomeric.com/blog',
    title: 'Blog — AI Growth, GEO & Digital Strategy | Atomeric',
    description: 'Insights on GEO, AI-native marketing, and growth strategy for ambitious brands.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://atomeric.com/blog',
  url: 'https://atomeric.com/blog',
  name: 'Atomeric Blog — AI Growth & GEO Insights',
  description: 'Insights on Generative Engine Optimization, AI-native marketing, and growth strategy.',
  publisher: { '@id': 'https://atomeric.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atomeric.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atomeric.com/blog' },
    ],
  },
}

const POSTS = [
  {
    slug: 'how-to-rank-in-google-ai-overviews',
    category: 'GEO',
    title: 'How to Get Featured in Google AI Overviews',
    description:
      'Google AI Overviews appear in 45% of all searches. Proven strategies to get your Indian B2B brand cited inside AI Overviews — with data and research.',
    date: 'August 14, 2026',
    readTime: '11 min read',
    thumbnail: '/blog/how-to-rank-in-google-ai-overviews.jpg',
  },
  {
    slug: 'what-is-generative-engine-optimization',
    category: 'GEO',
    title: 'What is Generative Engine Optimization (GEO)?',
    description:
      'GEO gets your brand cited by ChatGPT, Perplexity, and Google AI Overviews. The complete guide for Indian B2B brands — definitions, research, and 5 practical steps to start.',
    date: 'August 14, 2026',
    readTime: '11 min read',
    thumbnail: '/blog/what-is-generative-engine-optimization.jpg',
  },
  {
    slug: 'how-to-get-cited-by-chatgpt-perplexity',
    category: 'GEO',
    title: 'How to Get Cited by ChatGPT & Perplexity',
    description:
      'Six proven steps to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews — based on the Princeton KDD 2024 GEO study and practical implementation.',
    date: 'August 14, 2026',
    readTime: '11 min read',
    thumbnail: '/blog/how-to-get-cited-by-chatgpt-perplexity.jpg',
  },
  {
    slug: 'aeo-vs-geo-vs-seo',
    category: 'AEO',
    title: 'AEO vs GEO vs SEO: Key Differences Explained',
    description:
      'Confused by AEO, GEO, and SEO? The full breakdown of how they differ, which matters most for Indian B2B brands, and how to run all three at once without tripling your workload.',
    date: 'August 14, 2026',
    readTime: '11 min read',
    thumbnail: '/blog/aeo-vs-geo-vs-seo.jpg',
  },
  {
    slug: 'what-is-llms-txt',
    category: 'GEO',
    title: 'What is llms.txt? Why Your Site Needs It',
    description:
      'llms.txt tells AI engines what your website does, who you serve, and which pages matter. The complete guide to creating one — plus what to include and how to validate it.',
    date: 'August 14, 2026',
    readTime: '10 min read',
    thumbnail: '/blog/what-is-llms-txt.jpg',
  },
  {
    slug: 'what-is-ai-native-marketing',
    category: 'AI Marketing',
    title: 'What Is AI-Native Marketing? Complete Guide for B2B Leaders',
    description:
      "AI-native marketing isn't using ChatGPT to write blog posts. It's rebuilding how your company acquires, nurtures, and converts customers — with AI embedded at every stage.",
    date: 'August 14, 2026',
    readTime: '8 min read',
    thumbnail: '/blog/what-is-ai-native-marketing.jpg',
  },
  {
    slug: 'ai-marketing-for-it-services',
    category: 'B2B',
    title: 'AI-Powered Marketing for IT Services Companies: Win More Enterprise Contracts',
    description:
      'IT services companies face undifferentiated positioning, long sales cycles, and complex buying committees. Here is how AI-native marketing solves all three and drives measurable pipeline.',
    date: 'August 14, 2026',
    readTime: '9 min read',
    thumbnail: '/blog/ai-marketing-for-it-services.jpg',
  },
  {
    slug: 'b2b-content-strategy-ai-era',
    category: 'Strategy',
    title: 'B2B Content Strategy in the AI Era: Rank on Google and Get Cited by ChatGPT',
    description:
      'Most B2B content strategies optimize for one channel. In 2026 you need two: Google search and AI-generated answers. Here is the framework that wins both simultaneously.',
    date: 'August 14, 2026',
    readTime: '9 min read',
    thumbnail: '/blog/b2b-content-strategy-ai-era.jpg',
  },
  {
    slug: 'what-is-aeo',
    category: 'AEO',
    title: 'What Is Answer Engine Optimization (AEO)? Complete Guide 2026',
    description:
      'Answer Engine Optimization (AEO) gets your brand cited inside AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews. Here is exactly how it works and how to build it.',
    date: 'August 14, 2026',
    readTime: '8 min read',
    thumbnail: '/blog/what-is-aeo.jpg',
  },
  {
    slug: 'geo-vs-seo',
    category: 'GEO',
    title: "GEO vs SEO: What's the Difference and Why Both Matter in 2026",
    description:
      'Traditional SEO gets you found on Google. Generative Engine Optimization gets you cited by AI engines like ChatGPT and Perplexity. Here is why ambitious brands need both — and how to start.',
    date: 'August 13, 2025',
    readTime: '7 min read',
    thumbnail: '/blog/geo-vs-seo.jpg',
  },
]

const S = {
  page: {
    background: 'var(--color-void)',
    minHeight: '100vh',
  } as React.CSSProperties,
  header: {
    paddingTop: '128px',
    paddingBottom: '80px',
    paddingLeft: 'clamp(20px, 5vw, 80px)',
    paddingRight: 'clamp(20px, 5vw, 80px)',
    borderBottom: '1px solid var(--color-border-subtle)',
  } as React.CSSProperties,
  headerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,
  eyebrow: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-teal)',
    marginBottom: '20px',
    display: 'block',
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: 700,
    color: 'var(--color-text-1)',
    letterSpacing: '-2px',
    lineHeight: 1.05,
    marginBottom: '20px',
  } as React.CSSProperties,
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    color: 'var(--color-text-2)',
    lineHeight: 1.65,
    maxWidth: '540px',
  } as React.CSSProperties,
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px clamp(20px, 5vw, 80px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '32px',
  } as React.CSSProperties,
  card: {
    background: 'var(--color-surface-1)',
    borderRadius: '12px',
    border: '1px solid var(--color-border-subtle)',
    padding: '0',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0',
    textDecoration: 'none',
    overflow: 'hidden',
    transition: 'border-color 240ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 240ms cubic-bezier(0.23, 1, 0.32, 1)',
  } as React.CSSProperties,
  thumb: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    borderRadius: '0',
    position: 'relative' as const,
    background: 'var(--color-surface-2, #0B1425)',
    flexShrink: 0,
  } as React.CSSProperties,
  thumbImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  } as React.CSSProperties,
}

export default function BlogPage() {
  return (
    <main id="main-content" style={S.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Header ── */}
      <section style={S.header}>
        <div style={S.headerInner}>
          <span style={S.eyebrow}>Insights</span>
          <h1 style={S.h1}>What We Think</h1>
          <p style={S.sub}>
            Long-form thinking on GEO, AI-native marketing, and the growth strategies that compound
            — from the team building them.
          </p>
        </div>
      </section>

      {/* ── Post grid ── */}
      <div style={S.grid}>
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-card"
            style={S.card}
          >
            {/* Thumbnail */}
            <div style={S.thumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.thumbnail}
                alt={post.title}
                style={S.thumbImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Card body */}
            <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              {/* Category */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-teal)',
                  background: 'var(--color-teal-dim)',
                  border: '1px solid var(--color-teal-border)',
                  borderRadius: '100px',
                  padding: '4px 10px',
                  width: 'fit-content',
                }}
              >
                {post.category}
              </span>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-text-1)',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                {post.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--color-text-2)',
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {post.description}
              </p>

              {/* Footer row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {post.date} · {post.readTime}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-teal)',
                  }}
                >
                  Read →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .blog-card img { transition: transform 0.4s ease; }
        .blog-card:hover img { transform: scale(1.04); }
      `}</style>
    </main>
  )
}
