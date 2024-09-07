import React from 'react'
import ContactSection from '../components/pagesections/ContactSection'
import PageBanner from '../components/pagesections/PageBanner'
import ReferralFormSection from '../components/pagesections/ReferralFormSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const Contact: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Contact Our Team' 
        subtitle='Let’s work together—contact us today.' 
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <ReferralFormSection />
      <ContactSection />
      <FeedbackFormSection />
    </>

  )
}

export default Contact