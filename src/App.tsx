import { Navigate, Routes, Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'
import './App.css'

// Component Imports
import Header from './components/pagesections/headers/Header'
import Footer from './components/pagesections/footers/Footer'
import GenericHeaderNoNav from './components/pagesections/headers/GenericHeaderNoNav'
import GenericHeaderOneItem from './components/pagesections/headers/GenericHeaderOneItem.tsx'
import ScrollToTop from './ScrollToTop.tsx'

// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Position from './pages/Position'
import Apply from './pages/Apply'

// Data Imports
import { newJobs } from './data/jobs.ts'
import { benefitsData } from './data/benefits.ts'

const trackingId = import.meta.env.VITE_REACT_APP_GA_MEARSUREMENT_ID
const pixelId = import.meta.env.VITE_REACT_APP_PIXEL_ID

function App() {
  const location = useLocation()
  const [acceptCookies, setAcceptCookies] = useState(true)

  useEffect(()=>{
    if (acceptCookies) {
      ReactGA.initialize(trackingId)
      ReactPixel.init(pixelId)
      ReactPixel.pageView()
    }
  }, [acceptCookies])

  const updateCookiesCallback = () => {
    setAcceptCookies((prevValue)=> !prevValue)
  }

  const renderHeader = () => {
    if (location.pathname === '/privacy') {
      return <GenericHeaderNoNav />
    }
    if (location.pathname.includes('/careers/openings/')){
      return <GenericHeaderOneItem />
    }
    return <Header />
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {renderHeader()}
        <main className="flex-grow">
            <Routes>
              {/* Routes for Main Pages */}
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/careers' element={<Careers openings={newJobs} benefitsData={benefitsData}/>} />
              <Route path='/services' element={<Services />} />
              <Route path='/community' element={<Community />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy updateCookieAcceptance={updateCookiesCallback} />} />
              {/* Redirects for .html urls */}
              <Route path='/index.html' element={<Navigate to="/" />} />
              <Route path='/careers.html' element={<Navigate to="/careers" />} />
              <Route path='/about.html' element={<Navigate to="/about" />} />
              <Route path='/services.html' element={<Navigate to="/services" />} />
              <Route path='/community.html' element={<Navigate to="/community" />} />
              <Route path='/contact.html' element={<Navigate to="/contact" />} />
              {/* Open Position Routes */}
              {newJobs.map(job => (
                <Route 
                  key={job.position} 
                  path={`/careers/openings/${job.path}`} 
                  element={
                    <Position
                      id={job.id}
                      position={job.position}
                      description={job.description}
                      department={job.department}
                      acroynm={job.acronym}
                      path={job.path}
                      linkedInUrl={job.linkedInUrl}
                      type={job.type}
                      city={job.city}
                      state={job.state}
                      text={job.text}
                      qualifitions={job.qualifications}
                      responsibilities={job.responsibilities}
                      lifting={job.lifting}
                    />
                  } />
              ))}
              {/* Apply to Open Position Routes */}
              {newJobs.map(job => (
                <Route
                  key={job.id}
                  path={`/careers/openings/${job.path}/apply/${job.id}`}
                  element={
                    <Apply />
                  } 
                />
              ))}

              {/* All Routes */}
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App
