import { Link } from 'react-router-dom'
import '../styles/components/_footer.scss'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__label">RealShivesh</p>
          <p className="footer__note">Frontend portfolio focused on work, writing, and decision-making.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/work">Work</Link>
          <Link to="/writing">Writing</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer__copy">© {date} RealShivesh</div>
      </div>
    </footer>
  )
}

export default Footer
