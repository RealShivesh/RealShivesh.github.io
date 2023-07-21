import '../assets/styles/socials.scss'
import { Github, Instagram, LinkedIn } from '../assets/svg'

const Socials = () => {
  return (
    <div className="social-links">
      <div className="h2">Let&apos;s connect</div>
      <div className="link-list">
        <a className="link" href="https://github.com/realshivesh">
          <img src={Github} alt="" />
        </a>
        <a className="link" href="https://www.linkedin.com/in/realshivesh/">
          <img src={LinkedIn} alt="" />
        </a>
        <a className="link" href="https://instagram.com/realshivesh">
          <img src={Instagram} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Socials
