import { useEffect } from 'react'
import './styles/main.scss'
import { HomePage } from './views/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './views/AboutMe'
import { Navbar } from './components/Navbar'
import { BooksPage } from './views/Books'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])
  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/books" element={<BooksPage />} /> */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
