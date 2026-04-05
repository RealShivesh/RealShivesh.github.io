import { motion } from 'framer-motion'
import '../styles/components/_pages.scss'

export const Work = () => {
  return (
    <section className="page page--work">
      <div className="page-hero">
        <span className="eyebrow">Work</span>
        <h1>Projects that balance craft with clarity.</h1>
        <p>
          I build web experiences that simplify complexity, improve decision-making, and make teams feel
          confident about the next step.
        </p>
      </div>

      <div className="project-grid">
        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="project-label">Design systems</span>
          <h2>Turning a fragmented product into a scalable UI system</h2>
          <p>
            Led the frontend design system work for a SaaS company, reducing implementation time by 40% while
            preserving design consistency across three products.
          </p>
          <div className="project-meta">
            <span>Role: Lead frontend engineer</span>
            <span>Tech: React, Sass, Figma, Storybook</span>
          </div>
          <div className="project-outcome">Outcome: faster releases, fewer UI regressions, clearer handoffs.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="project-label">Performance</span>
          <h2>Optimizing an onboarding flow for faster conversions</h2>
          <p>
            Refactored a multi-step onboarding experience to reduce load time, simplify state, and remove
            unnecessary rerenders.
          </p>
          <div className="project-meta">
            <span>Role: Frontend developer</span>
            <span>Tech: React, Vite, TypeScript, web performance</span>
          </div>
          <div className="project-outcome">Outcome: a 25% faster path to activation and lower abandonment.</div>
        </motion.article>

        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="project-label">Content strategy</span>
          <h2>Making technical writing feel intentional and useful</h2>
          <p>
            Created a writing structure for developer-facing content that keeps attention on tradeoffs, not
            features.
          </p>
          <div className="project-meta">
            <span>Role: Writer & technical lead</span>
            <span>Tech: Markdown, React, copy systems</span>
          </div>
          <div className="project-outcome">Outcome: clearer messaging and stronger alignment with product goals.</div>
        </motion.article>
      </div>
    </section>
  )
}
