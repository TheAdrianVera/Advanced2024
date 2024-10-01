import React from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'

// Component Imports
import PageBanner from '../components/pagesections/PageBanner'
import ServicesSection from '../components/pagesections/ServicesSection'
import ContactSection from '../components/pagesections/ContactSection'
import CoverageAreasSection from '../components/pagesections/CoverageAreasSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const Services: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: '/services', title: 'Services' })

  return (
    <>
      <Helmet>
        <title>Services | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Learn more about the many Healthcare Services we provide.' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Services | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Learn more about the many Healthcare Services we provide.' />
        <meta property='og:image' content='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/services' />
      </Helmet>
      <PageBanner 
        title='Our Healthcare Services' 
        subtitle='Learn more about the many Healthcare Services we provide.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <ServicesSection />
      <CoverageAreasSection />
      <ContactSection whiteAlternate={true}/>
      <FeedbackFormSection whiteAlternate={true}/>
    </>

  )
}

export default Services