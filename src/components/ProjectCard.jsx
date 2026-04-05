import { motion } from 'framer-motion'

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
}

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    >
      <div className="project-head">
        <span className="project-label">{project.name}</span>
        <span className="project-stage">{project.stage}</span>
      </div>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <div className="project-meta">
        <span>Problem: {project.problem}</span>
        <span>Stack direction: {project.stack}</span>
      </div>
      <div className="project-outcome">Portfolio signal: {project.signal}.</div>
    </motion.article>
  )
}
