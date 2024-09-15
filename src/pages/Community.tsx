import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'
import CommunitySection from '../components/pagesections/CommunitySection'
import CommunityEventsSection from '../components/pagesections/CommunityEventsSection'
import CommunityBiggestHeartSection from '../components/pagesections/CommunityBiggestHeartSection'
import ContactSection from '../components/pagesections/ContactSection'

const Community: React.FC = () => {
  return (
    <>
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