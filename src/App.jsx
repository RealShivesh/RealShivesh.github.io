import { useEffect } from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './views/AboutMe'
import { Contact } from './views/Contact'
import { HomePage } from './views/HomePage'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import { Notes } from './views/Notes'
import { Work } from './views/Work'
import { Writing } from './views/Writing'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Navbar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
