import '../styles/components/_notes.scss'

export const Notes = () => {
  return (
    <section className="notes-page">
      <div className="notes-hero">
        <p className="eyebrow">Notes</p>
        <h1>Three lanes, locked in</h1>
        <p className="lede">
          A quiet place for thinking in public. The lanes below keep the tone honest, the range wide, and the
          pressure low.
        </p>
      </div>

      <div className="lanes">
        <article className="lane lane--thinking">
          <div className="lane-header">
            <span className="lane-tag">Lane 1</span>
            <h2>Thinking Logs</h2>
            <p className="lane-subtitle">Short, frequent, low pressure</p>
          </div>
          <p className="lane-copy">These are mental snapshots.</p>
          <div className="lane-meta">
            <span>Length: 150–400 words</span>
            <span>Tone: honest, unfinished, calm</span>
          </div>
          <ul className="lane-list">
            <li>“What I’m noticing about complexity as projects grow”</li>
            <li>“A small decision I made today that saved future pain”</li>
            <li>“Why I’m becoming more careful about adding features”</li>
          </ul>
          <p className="lane-note">These are for you. Others are just allowed to read them.</p>
        </article>

        <article className="lane lane--synthesis">
          <div className="lane-header">
            <span className="lane-tag">Lane 2</span>
            <h2>Synthesis Notes</h2>
            <p className="lane-subtitle">Where range becomes an asset</p>
          </div>
          <p className="lane-copy">This is where books, films, tech, and life intersect.</p>
          <div className="lane-meta">
            <span>Length: 600–1200 words</span>
            <span>Frequency: rare, but intentional</span>
          </div>
          <ul className="lane-list">
            <li>“What reading Algorithms to Live By changed about how I design software”</li>
            <li>“Why good interfaces feel like good writing”</li>
            <li>“What films taught me about pacing, and why UI needs it too”</li>
            <li>“Why I’m suspicious of ‘best practices’ without context”</li>
          </ul>
          <p className="lane-note">This is the most you lane. Don’t rush it.</p>
        </article>

        <article className="lane lane--practitioner">
          <div className="lane-header">
            <span className="lane-tag">Lane 3</span>
            <h2>Practitioner Notes</h2>
            <p className="lane-subtitle">Credibility without bragging</p>
          </div>
          <p className="lane-copy">These are quiet postmortems.</p>
          <div className="lane-meta">
            <span>Length: 500–1000 words</span>
            <span>Tone: practical, unsentimental</span>
          </div>
          <ul className="lane-list">
            <li>“A frontend decision I regretted, and what I’d do differently”</li>
            <li>“Why we removed a feature instead of optimizing it”</li>
            <li>“How over-engineering showed up six months later”</li>
          </ul>
          <p className="lane-note">No tutorials. No frameworks parade. Just tradeoffs and consequences.</p>
        </article>
      </div>
    </section>
  )
}
