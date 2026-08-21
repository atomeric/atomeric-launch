export type Answer = 'yes' | 'no' | 'not-sure' | null

export type Question = {
  id: number
  dimension: string
  question: string
  tooltip: string
  scores: { yes: number; no: number; 'not-sure': number }
  feedback: { yes: string; no: string; 'not-sure': string }
}

export type ScoreBand = {
  slug: 'invisible' | 'unoptimised' | 'emerging' | 'ready'
  title: string
  summary: string
  diagnosis: string
  fixes: [string, string, string]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'AI Bot Access',
    question: 'Does your website allow AI search engines to crawl it?',
    tooltip:
      'Check your robots.txt file for GPTBot, ClaudeBot, and PerplexityBot — the crawlers that feed ChatGPT, Claude, and Perplexity with content to cite.',
    scores: { yes: 12, no: 0, 'not-sure': 4 },
    feedback: {
      yes: 'Good. This is the baseline requirement — without it, nothing else in this checklist matters.',
      no: 'AI bots that cannot crawl your site cannot cite it. This is the first fix.',
      'not-sure': 'A blocked bot is an invisible brand. Your robots.txt file takes 90 seconds to open and read.',
    },
  },
  {
    id: 2,
    dimension: 'Answer-First Content',
    question:
      'Do your key pages open with a direct, self-contained answer in the first 50–60 words — before any background, context, or brand story?',
    tooltip:
      'AI engines extract short passages that answer a question completely. A page that buries its answer below three paragraphs of introduction is rarely cited.',
    scores: { yes: 15, no: 0, 'not-sure': 5 },
    feedback: {
      yes: 'Answer-first architecture is the highest-leverage GEO change. Pages built this way are cited 3× more.',
      no: 'Pages that lead with context are skipped by AI engines. The answer must come first, every time.',
      'not-sure':
        'Open your top three pages and read the first paragraph. If it starts with "At [Company]..." — it does not qualify.',
    },
  },
  {
    id: 3,
    dimension: 'FAQ Schema',
    question: 'Do the FAQ sections on your website have structured data markup?',
    tooltip:
      "FAQ schema is machine-readable HTML that tells Google and AI engines exactly which text is a question and which is the answer. Verify with Google's Rich Results Test.",
    scores: { yes: 12, no: 0, 'not-sure': 4 },
    feedback: {
      yes: 'Schema is a strong signal. Pair it with answer-first paragraphs and you have the most extractable pages in your category.',
      no: 'Without FAQ schema, AI engines interpret your FAQs as body text. The markup makes the structure explicit and citable.',
      'not-sure': "Check Google's Rich Results Test (free). Paste your URL and look for FAQPage in the results.",
    },
  },
  {
    id: 4,
    dimension: 'Statistics with Sources',
    question:
      'Do your pages cite specific statistics with a link to the original source — not just a number, but the research behind it?',
    tooltip:
      'Sourced statistics increase AI citation rates by 37–40% according to the Princeton GEO study. An unsourced number is a claim. A sourced number is evidence.',
    scores: { yes: 12, no: 0, 'not-sure': 4 },
    feedback: {
      yes: 'Strong signal. Make sure the links point to the original source — AI engines follow the citation chain.',
      no: 'Pages with sourced statistics earn 37% more AI citations. Adding three to five per pillar page is one of the fastest wins available.',
      'not-sure':
        'Scan your top five pages for statistics. If none link to a study, report, or dataset, they are currently uncited.',
    },
  },
  {
    id: 5,
    dimension: 'Named Author / E-E-A-T',
    question:
      'Do your articles and guides show a named author with visible credentials — their name, role, and relevant expertise?',
    tooltip:
      'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — the framework AI engines use to decide whose content to recommend.',
    scores: { yes: 8, no: 0, 'not-sure': 3 },
    feedback: {
      yes: 'Good. Ensure the author bio is present on every piece of content, not just some. Consistency matters for E-E-A-T signals.',
      no: 'Anonymous content earns less trust from AI engines. A named expert with visible credentials turns a claim into a citable source.',
      'not-sure':
        'Check whether your blog posts show an author name. If it says "Admin" or has no byline, it does not qualify.',
    },
  },
  {
    id: 6,
    dimension: 'AI Citation Check',
    question:
      'Have you searched for your brand name on ChatGPT or Perplexity in the last 30 days to see whether — and how — you are being described?',
    tooltip:
      'Most brands have not checked. Many discover their competitors are being cited in answers their own buyers are reading — while they are invisible.',
    scores: { yes: 8, no: 0, 'not-sure': 2 },
    feedback: {
      yes: 'Good baseline awareness. The next step is testing the specific queries your buyers use — not just your brand name.',
      no: 'If you do not know whether you are being cited, you cannot fix it. This check takes five minutes.',
      'not-sure':
        'Open ChatGPT. Type your brand name. Then type the category question your buyers ask before shortlisting vendors.',
    },
  },
  {
    id: 7,
    dimension: 'llms.txt File',
    question:
      'Does your website have an /llms.txt file — a plain-text document at your domain root describing your company, services, and key pages?',
    tooltip:
      'llms.txt is an emerging standard that gives AI engines a clear, authoritative description of what your brand does — without requiring them to interpret your homepage design or JavaScript rendering.',
    scores: { yes: 8, no: 0, 'not-sure': 3 },
    feedback: {
      yes: 'Good. Review it quarterly — as your services evolve, your llms.txt should reflect the current positioning.',
      no: 'An llms.txt file takes under an hour to write. It is one of the most underused signals available to early movers in GEO.',
      'not-sure': 'Type yourdomain.com/llms.txt in a browser. If you get a 404, it does not exist yet.',
    },
  },
  {
    id: 8,
    dimension: 'Content Freshness',
    question:
      'Have your most important pages — homepage, services, and top articles — been substantially updated with new information in the last 6 months?',
    tooltip:
      'AI engines favour recently updated content. A page with a 2022 datestamp competes poorly against a page updated last month, even if the older page has more content.',
    scores: { yes: 10, no: 0, 'not-sure': 4 },
    feedback: {
      yes: 'Good. Set a quarterly review in your calendar for your top 10 pages — freshness is ongoing, not a one-time fix.',
      no: 'Stale content signals a stale business. A systematic quarterly refresh of your top 10 pages keeps you competitive.',
      'not-sure':
        'Check the last-modified date on your key pages. Most CMS systems show this in the editor even if it is not public.',
    },
  },
  {
    id: 9,
    dimension: 'Third-Party Mentions',
    question:
      'Does your brand appear — by name, with genuine discussion — on third-party platforms your buyers trust? Reddit, Quora, Wikipedia, G2, Capterra, or industry blogs.',
    tooltip:
      'Brands are 6.5× more likely to be cited by AI engines via third-party sources than via their own website. Your site alone is not sufficient.',
    scores: { yes: 10, no: 0, 'not-sure': 4 },
    feedback: {
      yes: 'This is where most brands are weakest. If you have genuine third-party presence, you have a significant citation advantage.',
      no: 'Your own website is not where AI engines primarily find you. The brands being cited are discussed elsewhere on the web.',
      'not-sure':
        'Search your brand name on Reddit, G2, and Quora. If nothing comes back, you do not have the external presence AI engines rely on.',
    },
  },
  {
    id: 10,
    dimension: 'Schema Breadth',
    question:
      'Beyond FAQ schema, does your site use additional structured data — such as Article, Organization, HowTo, or Product markup?',
    tooltip:
      'A richer schema graph tells AI engines not just what individual pages say, but what your entire organisation does and who it serves.',
    scores: { yes: 5, no: 0, 'not-sure': 2 },
    feedback: {
      yes: "Verify with Google's Rich Results Test that all schema types validate cleanly — malformed schema can suppress all structured data signals.",
      no: 'FAQ schema alone is better than nothing. Adding Article and Organization markup completes the signal set AI engines need.',
      'not-sure':
        "Run your homepage through Google's Rich Results Test. It lists every schema type detected on the page.",
    },
  },
]

export const SCORE_BANDS: ScoreBand[] = [
  {
    slug: 'invisible',
    title: 'AI Invisible',
    summary:
      'Your brand does not appear in AI-generated answers. Buyers asking AI engines about your category cannot find you.',
    diagnosis:
      'AI engines cannot read, parse, or cite your content in its current state. The gap between you and competitors being cited in ChatGPT and Perplexity is structural — it starts with how your site is built, not how good your product is.',
    fixes: [
      'Check robots.txt and verify GPTBot, ClaudeBot, and PerplexityBot are not blocked. If they are, remove the restriction.',
      'Rewrite the opening paragraph of your top three pages as a direct 50-word answer to the question each page targets — before any other content.',
      'Add FAQ schema markup to any FAQ section on your site. This is the fastest structural signal available.',
    ],
  },
  {
    slug: 'unoptimised',
    title: 'AI Unoptimised',
    summary:
      'AI engines can find you — but they are not citing you. You are visible in theory and invisible in practice.',
    diagnosis:
      'Your site is accessible to AI crawlers, but not structured the way AI engines need to extract and cite content. Your competitors are being recommended in the answers your buyers are reading right now.',
    fixes: [
      'Add answer-first paragraphs to your top 10 pages. Each must open with a direct, self-contained answer of 50–60 words — no preamble.',
      'Cite at least three sourced statistics per pillar page, with links to the original research. Sourced statistics increase citation rates by 37%.',
      'Add a named author with visible credentials to every piece of content you publish.',
    ],
  },
  {
    slug: 'emerging',
    title: 'AI Emerging',
    summary:
      'You are on the right path. Some queries cite you — but most of your category still belongs to competitors.',
    diagnosis:
      'You have built some of the right foundations. AI engines can find and sometimes cite you. The opportunity now is closing the remaining gaps — schema breadth, third-party presence, and consistent content freshness across all key pages.',
    fixes: [
      "Expand schema beyond FAQ. Add Article and Organization markup to all key pages. Verify all schema types pass Google's Rich Results Test.",
      'Build deliberate third-party presence. Answer five relevant Quora questions. Contribute genuinely to two or three Reddit communities your buyers use.',
      'Audit your llms.txt — does it accurately describe your current services and positioning? Update it if your offering has evolved.',
    ],
  },
  {
    slug: 'ready',
    title: 'AI Ready',
    summary:
      'Your brand is built to be cited. The question now is how many queries you own — and how fast you can expand that list.',
    diagnosis:
      'You have implemented foundations that most brands have not touched. AI engines can read, parse, and cite your content. The next layer is expanding topical authority and third-party presence to increase the range of queries you appear in.',
    fixes: [
      'Map your content cluster gaps. Which buyer questions are competitors answering that you are not? Build those pages first.',
      'Scale third-party citation building. Target DR 45+ publications for genuine mentions and reference links.',
      'Set a quarterly review cadence for your llms.txt, pricing.md, and top 20 pages. AI readiness is maintenance, not a permanent state.',
    ],
  },
]

export function calculateScore(answers: Answer[]): number {
  let total = 0
  QUESTIONS.forEach((q, i) => {
    const answer = answers[i]
    if (answer === 'yes') total += q.scores.yes
    else if (answer === 'not-sure') total += q.scores['not-sure']
  })
  return Math.min(100, Math.max(0, total))
}

export function getBand(score: number): ScoreBand {
  if (score <= 25) return SCORE_BANDS[0]
  if (score <= 50) return SCORE_BANDS[1]
  if (score <= 75) return SCORE_BANDS[2]
  return SCORE_BANDS[3]
}

export function getQuestionScore(q: Question, answer: Answer): number {
  if (answer === 'yes') return q.scores.yes
  if (answer === 'not-sure') return q.scores['not-sure']
  return 0
}
