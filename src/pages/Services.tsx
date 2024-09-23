import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../components/pagesections/PageBanner'
import ServicesSection from '../components/pagesections/ServicesSection'
import ContactSection from '../components/pagesections/ContactSection'
import CoverageAreasSection from '../components/pagesections/CoverageAreasSection'

const Services: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Our Healthcare Services' 
        subtitle='Learn more about the many Healthcare Services we provide.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <ServicesSection />
      <CoverageAreasSection />
      <ContactSection 
        whiteAlternate={true}
      />
    </>

  )
}

export default Services