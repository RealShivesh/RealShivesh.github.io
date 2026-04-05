import '../styles/components/_pages.scss'

export const Contact = () => {
  return (
    <section className="page page--contact">
      <div className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Let’s make the next thing easier to use.</h1>
        <p>
          If you need a frontend collaborator who cares about long-term code, clear decisions, and thoughtful user
          experience, let’s connect.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Work inquiries</h2>
          <p>Send one concise note about the project, timeline, and where you are today.</p>
          <a href="mailto:hello@realshivesh.com" className="contact-link">
            hello@realshivesh.com
          </a>
        </div>

        <div className="contact-card">
          <h2>Quick links</h2>
          <ul>
            <li>Hire me for frontend strategy</li>
            <li>Contract work on product teams</li>
            <li>Guest writing and editorial work</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
