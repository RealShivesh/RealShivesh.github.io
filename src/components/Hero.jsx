import { motion } from 'framer-motion'
import '../styles/components/_hero.scss'
import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {
  return (
    <section className="hero">
      {/* Background Gradient Animation */}

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          👋 Hey, I’m <span className="highlight">Shivesh</span>.
        </h1>

        {/* Dynamic Tagline with Typed.js */}
        <h2 className="typed-text">
          <Typewriter
            words={[
              'Building reliable web systems on the frontend ⚛️',
              'Thinking through systems, decisions, and tradeoffs 🧠',
              'Turning complexity into calm, usable interfaces 🎨'
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>
        <p>Frontend Developer · Systems Thinker · Writer</p>
        <p>Designing thoughtful web experiences with long-term sanity in mind.</p>

        {/* CTA Buttons */}
        <motion.div
          className="ctaButtons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/work" className="ctaPrimary">
            Explore My Work
          </a>
          <a href="/writing" className="ctaSecondary">
            Read My Writings
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
