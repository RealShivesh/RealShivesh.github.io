import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { skills } from '../data/siteData'
import '../styles/components/_about.scss'

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-orb about-orb--one" />
      <div className="about-orb about-orb--two" />
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-left">
          <div className="identity-card">
            <p className="identity-kicker">About</p>
            <div className="identity-mark">RS</div>
            <h2>Frontend systems, thoughtful interfaces, and a quieter kind of ambition.</h2>
            <p>
              I like products that feel composed. That usually means better structure behind the scenes, fewer moving
              parts, and more care around how decisions get made.
            </p>
            <div className="identity-meta">
              <span>Based in India</span>
              <span>React · Sass · TypeScript</span>
              <span>Interested in product, design, and writing</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="eyebrow">A better summary</p>
          <h1>
            I build frontend experiences that are easier to use, easier to change, and easier to trust.
          </h1>
          <p>
            The part of frontend work I care about most is translating complexity into something the team and the user
            can both live with. That includes interface design, information hierarchy, performance, and the small
            product decisions that create long-term calm.
          </p>

          <div className="skills">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skills-grid">
                  {skillGroup.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="fun-facts">
            <h3>Beyond delivery</h3>
            <div className="facts-grid">
              <div className="fact-card">I like systems that stay readable as they grow.</div>
              <div className="fact-card">I pay attention to pacing, not just layout, when shaping UI.</div>
              <div className="fact-card">Writing helps me think through technical decisions more honestly.</div>
              <div className="fact-card">The best frontend work usually removes more than it adds.</div>
            </div>
          </div>

          <div className="about-cta">
            <Link to="/work" className="cta-primary">
              Explore my work
            </Link>
            <Link to="/contact" className="cta-secondary">
              Start a conversation
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
