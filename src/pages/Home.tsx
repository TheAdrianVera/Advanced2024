import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'
import ReferralFormSection from '../components/pagesections/ReferralFormSection'
import ContactSection from '../components/pagesections/ContactSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'
import ServicesSection from '../components/pagesections/ServicesSection'
import CoverageAreasSection from '../components/pagesections/CoverageAreasSection'

const Home: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Home'  
        button={{ 
          text: 'Learn More', 
          link: '/#services'}}
        subtitle='Known our Expertise, Chosen for our Care'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
        logo={true}
        logoUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/ahsllc_logo.png'
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