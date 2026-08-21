export type CaseStudy = {
  slug: string
  clientLabel: string
  industry: string
  challengeOneLiner: string
  heroStat: string
  heroStatLabel: string
  pullStats: Array<{ value: string; label: string }>
  challenge: string
  approach: string
  results: string
  pullQuote: string
  pullQuoteAttribution: string
  whatMadeTheDifference: string
  faqItems: Array<{ question: string; answer: string }>
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'hr-saas-organic-growth',
    clientLabel: 'A Series B HR-tech SaaS platform, Bengaluru',
    industry: 'B2B SaaS / Human Resources Technology',
    challengeOneLiner: 'Every qualified lead came through paid channels. AI search engines did not know the platform existed.',
    heroStat: '+491%',
    heroStatLabel: 'increase in organic clicks in 8 months',
    pullStats: [
      { value: '₹0', label: 'paid acquisition spend after month 6' },
      { value: '3×', label: 'improvement in inbound lead quality' },
      { value: '8', label: 'months to organic-led pipeline' },
    ],
    challenge: 'The platform had built a genuinely differentiated product — a compliance and workforce analytics tool for mid-market enterprises — but its digital presence was a liability. Every qualified lead came through paid channels: Google Ads, LinkedIn campaigns, event sponsorships. Marketing spend was ₹8–12 lakhs per month, and the cost per qualified lead had climbed 60% over two years.\n\nThe website held 43 pages, none of which answered the specific questions enterprise HR buyers were typing into search. More critically: when a procurement head asked ChatGPT \'best HR compliance tools for Indian mid-market,\' the platform did not appear. Not because it lacked credibility — it had 200+ clients — but because its content had been written for sales decks, not for the questions buyers actually ask.\n\nThe blog published company news and product announcements. There was no FAQ structure, no schema markup, no answer-first architecture. The company was building a paid audience it would never own.',
    approach: 'Discover (Days 1–3): A full audit of the 43 existing pages revealed zero structured data, no FAQ schema, and no content targeting the 140+ questions enterprise HR buyers search before making a shortlist decision. Competitor analysis identified 12 content gaps where buyers were landing on thin competitor pages with no authoritative answer available anywhere.\n\nStrategize (Days 4–7): A content architecture of 8 pillar pages and 34 supporting cluster articles was mapped to buyer intent at three stages: awareness, consideration, and decision. Each pillar page was structured for AI extractability: a direct 50-word answer paragraph in the first visible screen, statistics cited with source links, and an FAQ schema block at the page foot.\n\nBuild (Days 8–21): Eighteen high-priority articles were produced first, each structured with the Princeton GEO framework: answer-first, statistics-cited, expert-attributed, FAQ-marked. An llms.txt file was added to the site root describing the platform\'s core capabilities in plain machine-readable language.\n\nLaunch (Day 21): All 18 articles published simultaneously. Internal linking strategy activated between pillars and clusters.\n\nMeasure and Scale: Monthly content velocity of 6–8 articles maintained. Schema expanded to include HowTo markup on process-oriented pages.',
    results: 'Within 8 months, organic clicks increased by 491%. Inbound leads from organic channels grew from near zero to the primary acquisition channel — surpassing paid for the first time. The sales team reported a marked shift in lead quality: organic leads arrived having already read 3–4 articles, with specific questions rather than generic enquiries.\n\nBy month 5, the platform was being cited in ChatGPT responses to \'best HR compliance software for Indian companies\' — a query the team had never been able to rank for through paid means.\n\nMonthly paid acquisition spend was reduced from ₹10 lakhs to ₹1.8 lakhs. The difference was absorbed by organic.',
    pullQuote: 'We had spent three years paying to put our name in front of buyers. It took eight months of doing it the right way to stop needing to.',
    pullQuoteAttribution: 'Co-founder, a Bengaluru B2B SaaS platform',
    whatMadeTheDifference: 'The platform\'s content had been written to impress, not to answer. Every page led with the product, not the problem. The shift was structural: every page was rebuilt to answer one specific buyer question in the first paragraph — completely and precisely — before any mention of the product. That answer-first structure is what AI engines extract. And once they extract it, they cite it.',
    faqItems: [
      {
        question: 'How long does it take to see results from GEO-led content?',
        answer: 'In this engagement, the first AI citations appeared in month 5. Organic leads began outpacing paid acquisition by month 8. The timeline varies by competitive density, but most clients see measurable AI citation activity within 90–120 days of the first content going live.',
      },
      {
        question: 'Do you need to stop paid acquisition while building organic?',
        answer: 'No. Paid acquisition continued throughout this engagement and was reduced gradually as organic channels proved themselves. The goal was to reduce paid dependency, not eliminate it overnight. Organic and paid ran in parallel for the first six months.',
      },
      {
        question: 'What makes GEO different from standard SEO content?',
        answer: 'Standard SEO content is optimised for a page rank position. GEO content is optimised for extraction — it answers one question completely in the first 50–60 words so that AI engines can pull the answer verbatim and cite the source. The structural requirement is different, and most agencies are not building for it yet.',
      },
    ],
  },
  {
    slug: 'dtc-wellness-organic-revenue',
    clientLabel: 'A D2C wellness brand, Mumbai',
    industry: 'Direct-to-Consumer / Health and Wellness',
    challengeOneLiner: 'Every sale began with a paid click. Rising Meta ad costs had pushed CAC to a point where profitable growth was no longer possible.',
    heroStat: '₹4.5L → ₹19L',
    heroStatLabel: 'monthly revenue from organic channels',
    pullStats: [
      { value: '+420%', label: 'organic traffic in 9 months' },
      { value: '−37%', label: 'customer acquisition cost' },
      { value: '48%', label: 'of total revenue now from organic' },
    ],
    challenge: 'The brand had spent two years building genuine product quality and a small but loyal customer base. Its monthly revenues were real, its reviews were good, and its retention numbers were better than the category average. What it had not built was any organic digital presence.\n\nEvery sale began with a paid click. Meta ad costs had risen sharply — CAC had climbed from ₹320 to ₹610 per customer over 18 months. At those acquisition economics, growth meant spending money the business did not have.\n\nThe brand\'s website had 6 product pages, a basic about page, and no content whatsoever. When a potential customer typed \'best ashwagandha supplement for sleep India\' into Perplexity, or asked Google\'s AI Overview to recommend a product in the category, the brand was invisible. Not because it was unknown — it had 1,200 repeat buyers — but because it had no content for AI systems to find, extract, or cite.\n\nThe content gap was not a nice-to-have problem. It was the reason the brand\'s growth ceiling was the size of its ad budget.',
    approach: 'Discover (Days 1–3): The audit identified 380 category and intent keywords across three buyer stages — awareness (\'does ashwagandha help with sleep\'), consideration (\'best ashwagandha supplements India compared\'), and decision (\'buy KSM-66 ashwagandha India online\'). Zero of these were covered by existing pages.\n\nStrategize (Days 4–7): A content architecture was designed around 6 pillar pages, each targeting a category-level question, supported by 32 cluster articles addressing specific intent queries. Every pillar page was structured for AI extractability: a direct answer paragraph under 60 words at the top, statistics sourced from peer-reviewed journals cited inline, and FAQ schema markup on every page.\n\nBuild (Days 8–21): The first 12 articles were built to the GEO standard: answer-first, citation-heavy, FAQ-marked. Product pages were restructured to include \'How to choose\' and \'What to look for\' sections — the precise language AI engines retrieve when a buyer asks for a category recommendation.\n\nLaunch (Day 21): All 12 articles published. An llms.txt was added to the site root. Product pages were submitted for schema validation and re-indexed.\n\nMeasure and Scale: Eight articles per month maintained. Pillar pages updated quarterly with fresh statistics.',
    results: 'Within 9 months, organic traffic increased by 420%. Over 380 keywords ranked on Google\'s first two pages. The brand began appearing in AI-generated answers for category comparison queries — the highest-intent moment in the buyer journey.\n\nMonthly revenue from organic channels grew from approximately ₹2 lakhs to ₹19 lakhs. Customer acquisition cost fell by 37% as organic leads — who arrived already educated on the product — converted at a higher rate than paid traffic.\n\nOrganic sales grew to represent 48% of total revenue, ending the brand\'s complete dependence on paid acquisition.',
    pullQuote: 'We were spending more to acquire customers than we were earning back in the first three months. The moment organic started working, everything changed — the maths, the margins, the whole business model.',
    pullQuoteAttribution: 'Founder, a Mumbai D2C wellness brand',
    whatMadeTheDifference: 'The brand\'s product pages described the product. They did not answer the question buyers were actually asking before they made a decision. The AI engine a buyer consults does not want to know what the product contains — it wants to know which product to recommend, and why. Content that answers \'which supplement is right for this specific need\' is what gets cited. That was the only change.',
    faqItems: [
      {
        question: 'Is GEO relevant for consumer brands, or is it mainly a B2B strategy?',
        answer: 'GEO is highly relevant for consumer brands. Buyers in health, beauty, food, and lifestyle categories increasingly ask AI engines for product recommendations before they search Google or visit a brand site. A brand that is not cited in those AI answers is invisible at the most decisive moment in the purchase journey.',
      },
      {
        question: 'How long before organic traffic began generating meaningful revenue?',
        answer: 'In this engagement, the first meaningful organic revenue — surpassing ₹5 lakhs per month — appeared at month 4. The ₹19 lakh monthly figure was reached by month 9. The growth was non-linear: slow for the first six weeks, then compounding as Google indexed more pillar content and internal links began passing authority between pages.',
      },
      {
        question: 'Do you handle Amazon/marketplace SEO as well?',
        answer: "The Atomeric engagement in this case focused exclusively on the brand's direct website. Marketplace presence (Amazon, Nykaa, Myntra) is a parallel channel with different optimisation rules. We focus on brand.com organic and AI citation, which builds the brand equity that makes marketplace performance more sustainable over time.",
      },
    ],
  },
  {
    slug: 'b2b-payments-bofu-content',
    clientLabel: 'A B2B payments platform, Gurugram',
    industry: 'Fintech / B2B Payments Infrastructure',
    challengeOneLiner: 'A well-funded fintech with a superior product was generating zero organic leads. Its content explained the technology but was invisible to the buyers experiencing the problems it solved.',
    heroStat: '64×',
    heroStatLabel: 'ROI on content investment within 6 months',
    pullStats: [
      { value: '7', label: 'qualified inbound leads in month 2' },
      { value: '₹40L+', label: 'viable deal size from organic leads' },
      { value: '2', label: 'months to first sales-qualified lead' },
    ],
    challenge: 'The platform processed cross-border B2B payments for Indian exporters — a genuinely complex problem that the founders had solved elegantly. The product had a waitlist, strong NPS, and a handful of enterprise reference clients. What it lacked entirely was discoverability.\n\nThe website was technically competent and visually professional. It explained the product thoroughly. It did not, however, appear anywhere in the searches its buyers were conducting: \'international payment delays India solution,\' \'cross-border B2B payment platform comparison,\' \'how to reduce FX loss on export payments.\' These were real queries, typed regularly by the CFOs, finance controllers, and operations heads the platform was targeting.\n\nMore critically: the brand had no presence on the third-party sources AI engines use to build recommendations. No mentions in finance industry forums. No appearance on comparison pages. No citations in any AI answer about B2B payment infrastructure in India. A buyer who asked ChatGPT for recommendations would receive three competitor names. This one did not appear.',
    approach: 'Discover (Days 1–3): Interviews with the CEO, two enterprise clients, and the sales team identified 14 recurring pain points buyers expressed before making a vendor decision. These pain points had never been addressed in any content the company had published.\n\nStrategize (Days 4–7): A Bottom-of-Funnel content strategy was prioritised over broad awareness content. The insight: buyers this close to a decision search with highly specific language. Ranking for low-volume, high-intent keywords would deliver qualified leads faster than chasing high-volume category terms.\n\nBuild (Days 8–21): Eight articles were produced, each targeting a specific pain-point query. Every article was structured with an answer-first paragraph under 55 words, real customer scenario descriptions, sourced statistics from RBI and SWIFT data, and FAQ schema markup. A founder story article — describing the specific moment the problem became obvious and why existing solutions failed — was prioritised as the first content asset.\n\nLaunch (Day 21): All 8 articles live. llms.txt added. Schema validated. The founder story was distributed to 3 fintech newsletters and 2 LinkedIn communities.\n\nMeasure and Scale: 4 new articles per month, each targeting a newly identified pain-point query.',
    results: 'The founding story article was shared by a fintech newsletter with 12,000 subscribers in week 3, driving immediate traffic before any organic ranking was established. By month 2, 7 qualified leads had come through organic content — all from BOFU articles, all at deal sizes viable for ₹40 lakh+ annual contracts.\n\nBy month 6, the content investment had generated a 64× ROI. The pain-point articles began ranking on page 1 for their target queries. The platform\'s name appeared in a Perplexity response to \'best cross-border B2B payment platform India\' for the first time in month 5.',
    pullQuote: 'We had a product that solved a real problem for real companies. We just were not in the room when those companies were looking for a solution. Content changed that.',
    pullQuoteAttribution: 'CFO, a Gurugram B2B payments platform',
    whatMadeTheDifference: 'The instinct of most technical founders is to publish content that demonstrates depth: how the technology works, what makes it different architecturally. This content impresses peers. It does not reach buyers. Buyers search for pain, not products. The moment the content was rewritten around the specific problems buyers typed into search — rather than the solutions the founders were proud of — the leads followed.',
    faqItems: [
      {
        question: 'What is Bottom-of-Funnel (BOFU) content and why start there?',
        answer: 'BOFU content targets buyers who are actively evaluating solutions — they know they have a problem and are choosing between vendors. These queries have lower search volume but dramatically higher conversion rates. Starting here generates leads faster than building awareness content, which requires months of ranking authority before it delivers pipeline.',
      },
      {
        question: 'Why did the founder story article outperform the product-focused content?',
        answer: 'Founder stories earn disproportionate attention because they explain why a product exists, not just what it does. Buyers at the decision stage are evaluating people as much as products. A credible founding narrative also earns newsletter and community shares that product-description articles never do — which is how this article reached a fintech newsletter audience of 12,000.',
      },
      {
        question: 'Can this approach work in a heavily regulated sector like fintech?',
        answer: 'Regulation makes BOFU content more valuable, not less. Buyers in regulated sectors are often confused, cautious, and looking for clarity. An article that explains RBI compliance requirements for cross-border payments — with accuracy and citations — is exactly the content a finance controller reads before shortlisting vendors. Regulation creates content opportunity.',
      },
    ],
  },
  {
    slug: 'certification-platform-seo',
    clientLabel: 'A professional certification platform, Hyderabad',
    industry: 'Edtech / Professional Learning',
    challengeOneLiner: 'A mobile-first certification platform with strong outcomes was invisible in the searches its buyers conducted before choosing a programme.',
    heroStat: '29×',
    heroStatLabel: 'ROI on content investment in 6 months',
    pullStats: [
      { value: '20×', label: 'increase in lead conversion rate' },
      { value: '11×', label: 'increase in sales-qualified leads' },
      { value: '₹11.5L', label: 'monthly PPC costs displaced by organic' },
    ],
    challenge: 'The platform offered a rigorous, mobile-first professional certification programme — priced below legacy institutions, structured for working professionals, and validated by a growing employer network. Early growth had come from paid Meta campaigns, which drove trial sign-ups efficiently.\n\nBut as ad costs rose, the unit economics deteriorated. More critically: the platform was invisible at the most important moment — when a working professional typed \'best online MBA India for working professionals\' or \'affordable MBA alternatives India\' into Google or asked Perplexity to compare programmes. Established institutions owned that real estate entirely.\n\nThe existing content was the root of the problem. Every article and page described the platform\'s pedagogy and technology. None of it addressed the specific questions buyers were actually asking before making a decision about their career. The content had been written for existing users, not for buyers who had never heard of the platform.\n\nThere was no schema markup, no structured FAQ, no content covering the full student journey. The platform was effectively arguing with itself in an empty room.',
    approach: 'Discover (Days 1–3): Analysis of 6 competitor content strategies identified 8 pillar content gaps and 34 cluster article opportunities where buyers were arriving at thin, poorly structured competitor pages. A keyword map of the full student decision journey was built — from \'is an online MBA worth it\' through to direct programme comparisons.\n\nStrategize (Days 4–7): Eighteen content pillars and 28 topical clusters were designed. Fourteen existing product pages were identified for restructuring. Eighty-six existing blog posts were marked for optimisation — adding answer-first paragraphs, FAQ schema, and citation-backed claims.\n\nBuild (Days 8–21): New pillar pages were built to GEO standard: a direct answer to the target question in the first 50 words, comparison tables where relevant, statistics sourced from GMAC and LinkedIn workforce data cited inline, and FAQ schema blocks. The llms.txt file was updated to include programme outcomes, employer recognition, and tuition data — the precise information AI engines need when making programme recommendations.\n\nLaunch (Day 21): Pillar content published. Outreach began to 15 high-authority career and education publications for backlinks, securing DR 45–90 placements in month 1.\n\nMeasure and Scale: An ongoing alumni outcomes content programme began publishing quarterly, creating a compounding citation asset.',
    results: 'Within 6 months, organic traffic to target programme keywords tripled. Overall site traffic increased by 138%. Lead conversion improved by 20× — the most significant shift: organic leads arrived already knowing the price, the format, and the employer recognition. They were not enquiring. They were deciding.\n\nSales-qualified leads grew 11× compared to the pre-content baseline. PPC costs were reduced by $15,000 per month as organic traffic displaced paid at equivalent quality. The content programme generated a 29× return on investment within the measurement period.',
    pullQuote: 'Our paid leads would ask the same five questions in every call — they needed convincing about things we had already answered on our blog. Our organic leads had already read it all. The call was just logistics.',
    pullQuoteAttribution: 'Head of Enrolments, a Hyderabad professional certification platform',
    whatMadeTheDifference: 'The platform was competing with institutions that had decades of brand recognition. It could not outspend them on paid acquisition. What it could do — and did — was outstructure them on content. Answer-first architecture, FAQ schema, and consistent alumni outcome data created a content asset that AI engines cited because it was the most extractable, most specific answer available for the questions buyers were asking.',
    faqItems: [
      {
        question: 'Why did organic leads convert at a higher rate than paid leads?',
        answer: 'Paid leads arrive with awareness but not conviction. They clicked an ad that interrupted them. Organic leads arrive having actively searched for a solution, read multiple articles, and compared options. By the time they fill in a form, they have already made most of the decision. The sales conversation is shorter and the conversion rate is higher as a result.',
      },
      {
        question: 'What is topical authority and why does it matter for edtech?',
        answer: 'Topical authority means Google and AI engines recognise your site as the comprehensive resource on a subject — not just one good article. For edtech, this means covering every question a prospective student asks across the full decision journey. When one site covers the subject more completely than competitors, it earns a ranking and citation advantage that compounds over time.',
      },
      {
        question: 'How do you measure GEO results for an edtech brand?',
        answer: 'We track three layers: traditional SEO metrics (ranking positions, organic traffic volume), lead quality metrics (conversion rate from organic vs paid, SQL rate), and AI citation metrics (how frequently the brand appears in ChatGPT and Perplexity responses for target queries). The ROI calculation in this case used SQL count and average deal value against total content investment cost.',
      },
    ],
  },
  {
    slug: 'industrial-manufacturer-export',
    clientLabel: 'An industrial equipment manufacturer, Pune',
    industry: 'Industrial Manufacturing / B2B Export',
    challengeOneLiner: 'A 30-year manufacturer with a strong domestic reputation was losing international B2B opportunities to competitors with stronger digital presence — despite superior product quality.',
    heroStat: '2',
    heroStatLabel: 'new export markets penetrated without a sales office',
    pullStats: [
      { value: '+40%', label: 'organic website traffic in 6 months' },
      { value: '+35%', label: 'qualified inbound B2B leads from digital' },
      { value: '+50%', label: 'conversion rate vs trade show leads' },
    ],
    challenge: 'The manufacturer had built its reputation the traditional way: trade shows, distributor relationships, word-of-mouth within the domestic industrial community. It worked for thirty years. It was not working for international expansion.\n\nWhen procurement managers at factories in Malaysia or the UAE needed precision components for a new production line, they did not call a known distributor. They searched. \'Industrial precision component manufacturers India,\' \'CNC machined parts supplier APAC,\' \'ISO-certified industrial components Pune.\' These searches happened daily. The manufacturer appeared in none of them.\n\nThe website — last rebuilt in 2018 — had no case studies, no technical content, no application notes, no structured FAQ, and no schema markup. It listed product categories and contact details. A buyer from Singapore evaluating three suppliers would find two competitor websites with detailed application case studies and white papers. And this manufacturer\'s six-page brochure site.\n\nAI engines evaluating suppliers for procurement agents would find nothing citable from this brand. They would cite the competitors who had published the answers.',
    approach: 'Discover (Days 1–3): An audit of the three primary export market searches revealed 11 content types that procurement decision-makers consult before shortlisting: application case studies, material specification guides, tolerance standards explainers, industry certifications with context, and delivery lead time benchmarks. The manufacturer had published zero of these.\n\nStrategize (Days 4–7): A content programme was structured around three pillars: technical authority (material specs, tolerance guides, certification explainers), application proof (industry-specific case studies from existing clients), and buyer confidence (lead time transparency, quality process documentation, FAQ schema on every product category page).\n\nBuild (Days 8–21): Four detailed application case studies were produced first — one per key industry vertical (automotive, aerospace components, food processing equipment, and pharmaceutical machinery). Each was structured with an answer-first executive summary, specific tolerances achieved, and material data cited with source. FAQ schema was added to all 12 product category pages. An llms.txt file was created describing the company\'s ISO certifications, material capabilities, and delivery markets.\n\nLaunch (Day 21): Case studies and product pages published. LinkedIn campaigns targeting procurement heads in Singapore, Malaysia, and UAE launched with case study content as the primary creative.\n\nMeasure and Scale: White papers on supply chain optimisation and raw material quality standards were added at month 3.',
    results: 'Within 6 months, organic website traffic increased by 40%. Qualified inbound leads from digital channels rose by 35% — the bulk from LinkedIn campaigns driving buyers into the newly published case study content. Digital lead conversion rates ran 50% higher than trade show leads, which required significant post-event follow-up before qualification.\n\nTwo new export markets — South-East Asia and the Middle East — were penetrated without opening a regional office or hiring a local sales team. Three direct enquiries from Malaysian manufacturers arrived via the contact form after buyers found the company through Google search.',
    pullQuote: 'We went to six trade shows last year and came back with business cards. We published four case studies and received an enquiry from a factory in Kuala Lumpur that we had never heard of. That was when we understood what had changed.',
    pullQuoteAttribution: 'Export Sales Head, a Pune industrial components manufacturer',
    whatMadeTheDifference: 'Industrial buyers research in exactly the same way consumer buyers do — they search, they compare, they read. The difference is they are looking for technical proof rather than lifestyle imagery. A manufacturer that publishes its tolerances, its certifications, its application case studies, and its delivery track record in structured, AI-readable content gives procurement managers the evidence they need to shortlist confidently. The company that does not publish it does not make the shortlist.',
    faqItems: [
      {
        question: 'Can digital content really replace trade show presence for industrial B2B?',
        answer: 'Not replace — but rebalance. Trade shows generate relationships in a room. Digital content generates relationships before a buyer ever attends a show or picks up a phone. In this case, the manufacturer continued attending trade shows and found that buyers they met already knew the product because they had read the case studies online. Content makes trade show conversations shorter and more qualified.',
      },
      {
        question: 'How do you build credibility for a technical product through content?',
        answer: 'Technical content credibility comes from specificity. Not "we manufacture precision components" but "we machine aluminium 6061-T6 to tolerances of ±0.005mm for automotive brake assemblies." A procurement engineer reading that knows you understand their requirements. Vague capability claims signal the opposite. Every technical claim should be specific enough that an engineer can evaluate it.',
      },
      {
        question: 'Is LinkedIn content different from website SEO content?',
        answer: 'Yes — different structure, different purpose. Website SEO content is written for search intent (answering a specific query) and AI extractability (structured for citation). LinkedIn content is written for scroll context — it needs to stop a thumb in a feed and earn a click through to the full case study. In this engagement, LinkedIn drove the initial traffic; the website content converted that traffic into enquiries.',
      },
    ],
  },
]

export const SLUGS = [
  'hr-saas-organic-growth',
  'dtc-wellness-organic-revenue',
  'b2b-payments-bofu-content',
  'certification-platform-seo',
  'industrial-manufacturer-export',
] as const

export type CaseStudySlug = typeof SLUGS[number]
