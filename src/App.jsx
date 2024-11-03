import './styles/main.scss'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import WorkInProgress from './components/WorkInProgress'

function App() {
  const pageActive = true
  return (
    <>
      {pageActive ? <HomePage /> : <WorkInProgress />}
      <Footer />
    </>
  )
}

export default App
