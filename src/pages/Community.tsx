import React from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'

// Component Imports
import PageBanner from '../components/pagesections/PageBanner'
import CommunitySection from '../components/pagesections/CommunitySection'
import CommunityEventsSection from '../components/pagesections/CommunityEventsSection'
import CommunityBiggestHeartSection from '../components/pagesections/CommunityBiggestHeartSection'
import ContactSection from '../components/pagesections/ContactSection'

const Community: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: '/community', title: 'Community' })
  
  return (
    <>
      <Helmet>
        <title>Community | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Learn Advanced Healthcare Community' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Community | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Learn Advanced Healthcare Community' />
        <meta property='og:image' content='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/community' />
      </Helmet>
      <PageBanner 
        title='Advanced Community' 
        subtitle='Learn more about our amazing Advanced Community.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <CommunitySection />
      <CommunityEventsSection />
      <CommunityBiggestHeartSection />
      <ContactSection whiteAlternate={true}/>
    </>

  )
}

export default Community