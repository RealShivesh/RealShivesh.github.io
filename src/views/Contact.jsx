import { PageHero } from '../components/PageHero'
import { contactQuickLinks } from '../data/siteData'
import '../styles/components/_pages.scss'

export const Contact = () => {
  return (
    <section className="page page--contact">
      <PageHero
        eyebrow="Contact"
        title="Let’s make the next thing easier to use."
        description="If you need a frontend collaborator who cares about long-term code, clear decisions, and thoughtful user experience, let’s connect."
      />

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
            {contactQuickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
