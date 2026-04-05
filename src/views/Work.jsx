import { PageHero } from '../components/PageHero'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/siteData'
import '../styles/components/_pages.scss'

export const Work = () => {
  return (
    <section className="page page--work">
      <PageHero
        eyebrow="Work"
        title="Roadmap projects I am actively shaping into products."
        description="This is not a placeholder gallery. Each concept here has a clear user problem, an implementation path, and a product reason to exist."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
