import './App.css'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import WorkInProgress from './components/WorkInProgress'

function App() {
  const pageActive = false
  return (
    <>
      {pageActive ? <HomePage /> : <WorkInProgress />}
      <Footer />
    </>
  )
}

export default App
