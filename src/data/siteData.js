export const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/writing', label: 'Writing' },
  { to: '/notes', label: 'Notes' },
  { to: '/contact', label: 'Contact' }
]

export const projects = [
  {
    name: 'Project Bloodline',
    stage: 'Planned',
    title: 'A sophisticated family-tree engine powered by object relationships.',
    summary:
      'A graph-first product to model lineage, relationship rules, and inheritance paths. The goal is to make complex family structures explorable and queryable, not just visual.',
    problem: 'representing deep relationships without losing clarity',
    stack: 'TypeScript domain model, graph traversal, React visualization',
    signal: 'data structures + product UI + reasoning depth'
  },
  {
    name: 'RailStack',
    stage: 'Queued',
    title: 'Railway tracking dashboard with table scraping and live trend summaries.',
    summary:
      'A scraper-backed tracker for schedules, delays, and movement signals. Designed to turn dense railway data into a clean view people can actually act on.',
    problem: 'high-friction data tables with low decision value',
    stack: 'Python scraping pipeline, API layer, React analytics UI',
    signal: 'automation pipeline + practical interface design'
  },
  {
    name: 'FareWatch',
    stage: 'Active concept',
    title: 'Flight fare trend tracker with automated daily alerts.',
    summary:
      'A lightweight product to scrape fare movements, store trend history, and deliver route-based updates until the user stops tracking.',
    problem: 'price spikes are unpredictable and painful to monitor manually',
    stack: 'scheduled scraper, persistent storage, digest notifications',
    signal: 'applied automation with real user utility'
  },
  {
    name: 'LabelIQ',
    stage: 'Researching',
    title: 'A label-intelligence product in the same space as TruthIn-style tools.',
    summary:
      'Exploring how consumers can evaluate claims faster with better labeling clarity. This will be framed as a product thesis, not a feature clone.',
    problem: 'low trust and high ambiguity in product labels',
    stack: 'structured label parsing, confidence scoring, clear UX communication',
    signal: 'product strategy + data interpretation + UX ethics'
  },
  {
    name: 'Sparks-UI',
    stage: 'In parallel',
    title: 'A custom design system for my own app ecosystem.',
    summary:
      'Building a reusable UI foundation to power future products with shared components, interaction patterns, and visual consistency.',
    problem: 'repeated UI decisions across projects slow down delivery',
    stack: 'component library, tokens, docs, and usage guidelines',
    signal: 'systems thinking and long-term frontend discipline'
  }
]

export const writingPosts = [
  {
    title: 'Why good interfaces feel like good writing',
    summary: 'How structure, rhythm, and friction shape product clarity and user trust.'
  },
  {
    title: 'What happens when a frontend team over-architects',
    summary: 'A short postmortem on avoiding complexity before it becomes a bug farm.'
  },
  {
    title: 'A smarter way to plan tech debt conversations',
    summary: 'Practical framing for teams that need decisions, not abstract arguments.'
  }
]

export const contactQuickLinks = [
  'Hire me for frontend strategy',
  'Contract work on product teams',
  'Guest writing and editorial work'
]

export const skills = [
  {
    category: 'Frontend & Design Systems',
    items: ['React', 'Sass', 'Framer Motion', 'TypeScript', 'Design systems', 'Git']
  },
  {
    category: 'Infrastructure & Deployment',
    items: ['AWS', 'CloudFormation', 'Deployment pipelines', 'DevOps practices']
  },
  {
    category: 'UX & Product Strategy',
    items: ['UX laws & principles', 'Information architecture', 'Product thinking', 'User research']
  }
]
