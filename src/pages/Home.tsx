import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import PageBanner from '../components/pagesections/banners/PageBanner'
import ReferralFormSection from '../components/pagesections/ReferralFormSection'
import ContactSection from '../components/pagesections/ContactSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'
import ServicesSection from '../components/pagesections/ServicesSection'
import CoverageAreasSection from '../components/pagesections/CoverageAreasSection'

const Home: React.FC = () => {
  useEffect(()=>{
    ReactPixel.track('ViewContent', {
      page: 'Home',
      content_ids: ['/home'],
      content_type: 'page'
    })

    ReactGA.send({ hitType: 'pageview', page: '/home', title: 'Home' })
  }, [])


  

  return (
    <>
      <Helmet>
        <title>Home | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Advanced Health Care Services LLC. proudly provides skilled health care services to our patients in private homes, assisted living, and long term care facilities around Springfield, Illinois.' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Home | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Advanced Health Care Services LLC. proudly provides skilled health care services to our patients in private homes, assisted living, and long term care facilities around Springfield, Illinois.' />
        <meta property='og:image' content='https://d3978e1lxwwpv4.cloudfront.net/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org' />
      </Helmet>
      <PageBanner 
        title='Home'  
        button={{ 
          text: 'Learn More', 
          link: '/#services'}}
        subtitle='Known for our Expertise, Chosen for our Care'
        backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/header-bg.jpg'
        logo={true}
        logoUrl='https://d3978e1lxwwpv4.cloudfront.net/ahsllc_logo.png'
      />
      <ServicesSection />
      <CoverageAreasSection />
      <ReferralFormSection />
      <ContactSection />
      <FeedbackFormSection />
    </>
  )
}

export default Home