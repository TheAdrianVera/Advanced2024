import { Navigate, Routes, Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'
import './App.css'

// Component Imports
import Header from './components/pagesections/headers/Header'
import Footer from './components/pagesections/footers/Footer'
import GenericHeaderNoNav from './components/pagesections/headers/GenericHeaderNoNav'

// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Job from './pages/Job'
import { jobs } from './data/jobs.ts'
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
    if (location.pathname === '/privacy' || location.pathname.includes('/careers/openings/')) {
      return <GenericHeaderNoNav />
    }
    return <Header />
  }

  return (
    <div className="flex flex-col min-h-screen">
      {renderHeader()}
      <main className="flex-grow">
          <Routes>
            {/* Routes for Main Pages */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<Careers openings={jobs} benefitsData={benefitsData}/>} />
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
            {/* Career Job Routes */}
            {jobs.map(job => (
              <Route 
                key={job.position} 
                path={`/careers/openings/${job.path}`} 
                element={
                  <Job 
                    position={job.position} 
                    acronym={job.acronym} 
                    type={job.type} 
                    city={job.city} 
                    state={job.state} 
                    stateAbbrev={job.stateAbbrev}
                    url={job.url} 
                    text={job.text}
                    path={job.path}
                    listingDescriptionHtml={job.listingDescriptionHtml}
                    department={job.department}
                    />
                } />
            ))}
            {/* All Routes */}
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
