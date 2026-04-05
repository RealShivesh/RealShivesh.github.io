import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import '../styles/components/_hero.scss'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <motion.div
        className="hero-shell"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-copy">
          <p className="hero-kicker">Frontend engineer · systems thinker · writer</p>
          <h1>
            Building interfaces that stay clear even when the product gets messy.
          </h1>
          <h2 className="typed-text">
            <Typewriter
              words={[
                'Designing calmer frontend systems for growing products.',
                'Reducing UI complexity before it becomes team complexity.',
                'Writing about tradeoffs, craft, and durable product thinking.'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={38}
              deleteSpeed={24}
              delaySpeed={2100}
            />
          </h2>
          <p className="hero-lede">
            I care about the part after launch too: maintainability, decision quality, and whether the interface still
            makes sense six months later.
          </p>

          <motion.div
            className="ctaButtons"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/work" className="ctaPrimary">
              Explore selected work
            </Link>
            <Link to="/writing" className="ctaSecondary">
              Read the writing
            </Link>
          </motion.div>

          <div className="hero-metrics" aria-label="Portfolio highlights">
            <div>
              <strong>3</strong>
              <span>focus areas</span>
            </div>
            <div>
              <strong>1</strong>
              <span>clear point of view</span>
            </div>
            <div>
              <strong>0</strong>
              <span>filler sections</span>
            </div>
          </div>
        </div>

        <motion.aside
          className="hero-panel"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="panel-label">Current signal</p>
          <div className="panel-card">
            <span className="panel-dot" />
            <div>
              <h3>Designing for clarity at scale</h3>
              <p>
                The recurring theme across my work is simple: reduce friction for users without pushing hidden
                complexity onto the team.
              </p>
            </div>
          </div>
          <ul className="panel-list">
            <li>Frontend architecture with fewer moving parts</li>
            <li>UI systems that support real product change</li>
            <li>Writing that explains decisions, not just outcomes</li>
          </ul>
        </motion.aside>
      </motion.div>
    </section>
  )
}
