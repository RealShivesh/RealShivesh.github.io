import { PageHero } from '../components/PageHero'
import { writingPosts } from '../data/siteData'
import '../styles/components/_pages.scss'

export const Writing = () => {
  return (
    <section className="page page--writing">
      <PageHero
        eyebrow="Writing"
        title="Writing about systems, design, and product tradeoffs."
        description="These pieces are meant to be useful, not performative. Clear, honest, and built for people who want to think better about the work they build."
      />

      <div className="writing-list">
        {writingPosts.map((post) => (
          <article className="writing-card" key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
