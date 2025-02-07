import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import PageBanner from '../components/pagesections/banners/PageBanner'
import ServicesSection from '../components/pagesections/ServicesSection'
import ContactSection from '../components/pagesections/ContactSection'
import CoverageAreasSection from '../components/pagesections/CoverageAreasSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const Services: React.FC = () => {
  useEffect(()=>{
    ReactPixel.pageView()
    ReactPixel.track('ViewContent', {
      page: 'Services',
      content_ids: ['/services'],
      content_type: 'page'
    })

    ReactGA.send({ hitType: 'pageview', page: '/services', title: 'Services' })
  }, [])

  

  return (
    <>
      <Helmet>
        <title>Services | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Learn more about the many Healthcare Services we provide.' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Services | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Learn more about the many Healthcare Services we provide.' />
        <meta property='og:image' content='https://d3978e1lxwwpv4.cloudfront.net/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/services' />
      </Helmet>
      <PageBanner 
        title='Our Healthcare Services' 
        subtitle='Learn more about the many Healthcare Services we provide.'
        backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/header-bg.jpg'
      />
      <ServicesSection />
      <CoverageAreasSection />
      <ContactSection whiteAlternate={true}/>
      <FeedbackFormSection whiteAlternate={true}/>
    </>

  )
}

export default Services