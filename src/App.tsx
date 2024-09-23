import { Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Community from './pages/Community'
import Contact from './pages/Contact'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

const trackingId = import.meta.env.VITE_REACT_APP_GA_MEARSUREMENT_ID

function App() {

  useEffect(()=>{
    ReactGA.initialize(trackingId)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/services' element={<Services />} />
          <Route path='/community' element={<Community />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
