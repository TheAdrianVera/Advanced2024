import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import PageBanner from '../components/pagesections/banners/PageBanner'
import CommunitySection from '../components/pagesections/CommunitySection'
import CommunityEventsSection from '../components/pagesections/CommunityEventsSection'
import CommunityBiggestHeartSection from '../components/pagesections/CommunityBiggestHeartSection'
import ContactSection from '../components/pagesections/ContactSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const Community: React.FC = () => {
  useEffect(()=>{
    ReactPixel.pageView()
    ReactPixel.track('ViewContent', {
      page: 'Community',
      content_ids: ['/community'],
      content_type: 'page'
    })

    ReactGA.send({ hitType: 'pageview', page: '/community', title: 'Community' })
  }, [])

  
  return (
    <>
      <Helmet>
        <title>Community | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Learn Advanced Healthcare Community' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Community | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Learn Advanced Healthcare Community' />
        <meta property='og:image' content='https://d3978e1lxwwpv4.cloudfront.net/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/community' />
      </Helmet>
      <PageBanner 
        title='Advanced Community' 
        subtitle='Learn more about our amazing Advanced Community.'
        backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/header-bg.jpg'
      />
      <CommunitySection />
      <CommunityEventsSection />
      <CommunityBiggestHeartSection />
      <ContactSection whiteAlternate={true}/>
      <FeedbackFormSection whiteAlternate={true}/>
    </>

  )
}

export default Community