import { Navigate, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import './App.css'

// Component Imports
import Header from './components/Header'
import Footer from './components/Footer'

// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Community from './pages/Community'
import Contact from './pages/Contact'


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
            <Route path='/careers.html' element={<Navigate to="/careers" />} />
            <Route path='/about.html' element={<Navigate to="/about" />} />
            <Route path='/services.html' element={<Navigate to="/services" />} />
            <Route path='/community.html' element={<Navigate to="/community" />} />
            <Route path='/contact.html' element={<Navigate to="/contact" />} />
            <Route path='*' element={<Home />} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
