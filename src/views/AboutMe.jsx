import { motion } from 'framer-motion'
import '../styles/components/_about.scss'

export const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ✅ Left Column - Profile Image */}
        <div className="about-left">
          <img src="/images/shivesh-avatar.png" alt="Shivesh" />
        </div>

        {/* ✅ Right Column - About Content */}
        <div className="about-right">
          <h2>
            👋 Hey, I'm <span className="highlight">Shivesh</span>
          </h2>
          <p>
            A **Frontend Developer** who loves crafting **sleek, interactive web experiences** with React, Sass, and
            modern UI/UX principles. When I’m not coding, I’m either **curating music, playing chess, experimenting in
            the kitchen, or working on my stand-up material.**
          </p>

          {/* ✅ Skills Section (Row Layout) */}
          <div className="skills">
            <h3>💡 My Stack</h3>
            <div className="skills-grid">
              <span>React</span>
              <span>Sass</span>
              <span>Framer Motion</span>
              <span>Material UI</span>
              <span>TypeScript</span>
              <span>Git</span>
            </div>
          </div>

          {/* ✅ Fun Facts (Grid-based Layout) */}
          <div className="fun-facts">
            <h3>🎭 Beyond the Code</h3>
            <div className="facts-grid">
              <div className="fact-card">
                🍳 **Cooking Enthusiast:** If I weren’t coding, I’d be running a restaurant.
              </div>
              <div className="fact-card">♟️ **Chess Player:** Always thinking 5 moves ahead.</div>
              <div className="fact-card">🎧 **Music Junkie:** Linkin Park, Green Day & an ever-growing playlist.</div>
              <div className="fact-card">🎤 **Stand-Up Fanatic:** Dark humor & sharp wit? Say no more.</div>
              <div className="fact-card">💡 **Philosophy:** "Keep it clean, make it fast, let it flow."</div>
            </div>
          </div>

          {/* ✅ CTA Buttons */}
          <div className="about-cta">
            <a href="#work" className="cta-primary">
              Let's connect!
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
