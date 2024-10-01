import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import ContactSection from '../components/pagesections/ContactSection'
import PageBanner from '../components/pagesections/PageBanner'
import ReferralFormSection from '../components/pagesections/ReferralFormSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const Contact: React.FC = () => {
  useEffect(()=>{
    ReactPixel.pageView()
    ReactPixel.track('ViewContent', {
      page: 'Contact',
      content_ids: ['/contact'],
      content_type: 'page'
    })

    ReactGA.send({ hitType: 'pageview', page: '/contact', title: 'Contact' })
  }, [])

  

  return (
    <>
      <Helmet>
        <title>Contact | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Contact Advanced Healthcare Services LLC.' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Contact | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Contact Advanced Healthcare Services LLC.' />
        <meta property='og:image' content='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/contact' />
      </Helmet>
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