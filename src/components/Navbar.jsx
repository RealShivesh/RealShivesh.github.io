import { useContext, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/components/_navbar.scss'

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link to="/" className="logo">
        RealShivesh
      </Link>

      <div className="menu-container">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <ul ref={menuRef} className={`links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/writing" onClick={() => setMenuOpen(false)}>
            Writing
          </Link>
        </li>
        <li>
          <Link to="/notes" onClick={() => setMenuOpen(false)}>
            Notes
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <button type="button" onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
