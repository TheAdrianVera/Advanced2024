import { Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Services from './pages/Services'
import Community from './pages/Community'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/services' element={<Services />} />
        <Route path='/community' element={<Community />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
