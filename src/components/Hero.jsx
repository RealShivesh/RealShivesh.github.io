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
              'Building things with React ⚛️',
              'Exploring ideas through writing ✍️',
              'Crafting lines and verses 🎵',
              'Always learning, always growing 🚀',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>

        <p>🚀 Frontend Developer | Writer | Poet</p>
        <p>🎨 Crafting sleek, high-performance web experiences, and enchanting verses.</p>

        {/* CTA Buttons */}
        <motion.div
          className="ctaButtons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#work" className="ctaPrimary">
            Explore My Work
          </a>
          <a href="#contact" className="ctaSecondary">
            Lets Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
