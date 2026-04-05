import { motion } from 'framer-motion'
import '../styles/components/_pages.scss'

export const Work = () => {
  return (
    <section className="page page--work">
      <div className="page-hero">
        <span className="eyebrow">Work</span>
        <h1>Roadmap projects I am actively shaping into products.</h1>
        <p>
          This is not a placeholder gallery. Each concept here has a clear user problem, an implementation path, and
          a product reason to exist.
        </p>
      </div>

      <div className="project-grid">
        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="project-head">
            <span className="project-label">Project Bloodline</span>
            <span className="project-stage">Planned</span>
          </div>
          <h2>A sophisticated family-tree engine powered by object relationships.</h2>
          <p>
            A graph-first product to model lineage, relationship rules, and inheritance paths. The goal is to make
            complex family structures explorable and queryable, not just visual.
          </p>
          <div className="project-meta">
            <span>Problem: representing deep relationships without losing clarity</span>
            <span>Stack direction: TypeScript domain model, graph traversal, React visualization</span>
          </div>
          <div className="project-outcome">Portfolio signal: data structures + product UI + reasoning depth.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="project-head">
            <span className="project-label">RailStack</span>
            <span className="project-stage">Queued</span>
          </div>
          <h2>Railway tracking dashboard with table scraping and live trend summaries.</h2>
          <p>
            A scraper-backed tracker for schedules, delays, and movement signals. Designed to turn dense railway data
            into a clean view people can actually act on.
          </p>
          <div className="project-meta">
            <span>Problem: high-friction data tables with low decision value</span>
            <span>Stack direction: Python scraping pipeline, API layer, React analytics UI</span>
          </div>
          <div className="project-outcome">Portfolio signal: automation pipeline + practical interface design.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="project-head">
            <span className="project-label">FareWatch</span>
            <span className="project-stage">Active concept</span>
          </div>
          <h2>Flight fare trend tracker with automated daily alerts.</h2>
          <p>
            A lightweight product to scrape fare movements, store trend history, and deliver route-based updates until
            the user stops tracking.
          </p>
          <div className="project-meta">
            <span>Problem: price spikes are unpredictable and painful to monitor manually</span>
            <span>Stack direction: scheduled scraper, persistent storage, digest notifications</span>
          </div>
          <div className="project-outcome">Portfolio signal: applied automation with real user utility.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="project-head">
            <span className="project-label">LabelIQ</span>
            <span className="project-stage">Researching</span>
          </div>
          <h2>A label-intelligence product in the same space as TruthIn-style tools.</h2>
          <p>
            Exploring how consumers can evaluate claims faster with better labeling clarity. This will be framed as a
            product thesis, not a feature clone.
          </p>
          <div className="project-meta">
            <span>Problem: low trust and high ambiguity in product labels</span>
            <span>Stack direction: structured label parsing, confidence scoring, clear UX communication</span>
          </div>
          <div className="project-outcome">Portfolio signal: product strategy + data interpretation + UX ethics.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="project-head">
            <span className="project-label">Sparks-UI</span>
            <span className="project-stage">In parallel</span>
          </div>
          <h2>A custom design system for my own app ecosystem.</h2>
          <p>
            Building a reusable UI foundation to power future products with shared components, interaction patterns,
            and visual consistency.
          </p>
          <div className="project-meta">
            <span>Problem: repeated UI decisions across projects slow down delivery</span>
            <span>Stack direction: component library, tokens, docs, and usage guidelines</span>
          </div>
          <div className="project-outcome">Portfolio signal: systems thinking and long-term frontend discipline.</div>
        </motion.article>
      </div>
    </section>
  )
}
