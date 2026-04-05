import '../styles/components/_pages.scss'

export const Writing = () => {
  return (
    <section className="page page--writing">
      <div className="page-hero">
        <span className="eyebrow">Writing</span>
        <h1>Writing about systems, design, and product tradeoffs.</h1>
        <p>
          These pieces are meant to be useful, not performative. Clear, honest, and built for people who want to think
          better about the work they build.
        </p>
      </div>

      <div className="writing-list">
        <article className="writing-card">
          <h2>Why good interfaces feel like good writing</h2>
          <p>How structure, rhythm, and friction shape product clarity and user trust.</p>
        </article>
        <article className="writing-card">
          <h2>What happens when a frontend team over-architects</h2>
          <p>A short postmortem on avoiding complexity before it becomes a bug farm.</p>
        </article>
        <article className="writing-card">
          <h2>A smarter way to plan tech debt conversations</h2>
          <p>Practical framing for teams that need decisions, not abstract arguments.</p>
        </article>
      </div>
    </section>
  )
}
