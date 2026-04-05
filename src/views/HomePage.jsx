import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import '../styles/components/_home.scss'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="home-section home-section--featured">
        <div className="section-heading">
          <p className="eyebrow">Selected paths</p>
          <h2>The portfolio reads better when the entry points are obvious.</h2>
          <p>
            Three routes matter here: the work, the writing, and the notes that show how decisions are made.
          </p>
        </div>

        <div className="featured-grid">
          <Link to="/work" className="featured-card featured-card--work">
            <span className="featured-tag">Work</span>
            <h3>Case studies with outcomes, constraints, and actual tradeoffs.</h3>
            <p>Less gallery, more evidence.</p>
          </Link>

          <Link to="/writing" className="featured-card featured-card--writing">
            <span className="featured-tag">Writing</span>
            <h3>Pieces about systems, interfaces, and product thinking.</h3>
            <p>Useful writing, not content for the sake of content.</p>
          </Link>

          <Link to="/notes" className="featured-card featured-card--notes">
            <span className="featured-tag">Notes</span>
            <h3>Shorter thoughts that capture where my thinking is moving.</h3>
            <p>Low ceremony, high signal.</p>
          </Link>
        </div>
      </section>

      <section className="home-section home-section--principles">
        <div className="principles-card">
          <p className="eyebrow">Working style</p>
          <h2>I optimize for longevity, not just launch day.</h2>
          <div className="principles-grid">
            <article>
              <h3>Clarity first</h3>
              <p>Interfaces should help people decide faster, not admire the UI longer.</p>
            </article>
            <article>
              <h3>Systems second</h3>
              <p>Good frontend work keeps the product flexible without making the codebase fragile.</p>
            </article>
            <article>
              <h3>Signal always</h3>
              <p>Every section should prove something. If it does not, it probably should not be there.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
