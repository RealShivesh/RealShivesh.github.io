import { useContext, useState, useEffect, useRef } from 'react'
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
    <nav className="navbar">
      <a href="/" className="logo">
        RealShivesh
      </a>

      {/* ✅ Wrap Hamburger + Theme Toggle in One Container */}
      <div className="menu-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'V' : 'A'}
        </button>
      </div>

      {/* ✅ Navigation Links (Column on Mobile) */}
      <ul ref={menuRef} className={`links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="/work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
        </li>
        <li>
          <a href="/writing" onClick={() => setMenuOpen(false)}>
            Writing
          </a>
        </li>
        {/* <li>
          <a href="/books" onClick={() => setMenuOpen(false)}>
            Books
          </a>
        </li> */}
        <li>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
        <a onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </a>
      </ul>
    </nav>
  )
}
