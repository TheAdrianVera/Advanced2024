import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import PageBanner from '../components/pagesections/banners/PageBanner'
import BenefitsSection from '../components/pagesections/BenefitsSection'
import ContactSection from '../components/pagesections/ContactSection'
import CultureSection from '../components/pagesections/CultureSection'
import OpenPositionsSection from '../components/pagesections/OpenPositionsSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'


interface CareersProps {
  openings: any[]
  benefitsData: any[]
}

const Careers: React.FC<CareersProps> = ({openings, benefitsData}) => {
  useEffect(() => {
    ReactPixel.pageView()
    ReactPixel.track('ViewContent', {
      page: 'Careers',
      content_ids: ['/careers'],
      content_type: 'page'
    })

    ReactGA.send({ hitType: 'pageview', page: '/careers', title: 'Career' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Careers | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='We are hiring! Learn about careers at Advanced Healthcare Services LLC.' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='Careers | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='We are hiring! Learn about careers at Advanced Healthcare Services LLC.' />
        <meta property='og:image' content='https://d3978e1lxwwpv4.cloudfront.net/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/careers' />
      </Helmet>
      <PageBanner 
        title='Careers at Advanced' 
        subtitle='Join our Advanced team and make a difference.' 
        backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/header-bg.jpg'
        careerButton={{ 
          text: 'Open Positions', 
          link: '/careers/#open-positions'}}
      />
      <CultureSection />
      <BenefitsSection benefitsData={benefitsData}/>
      <OpenPositionsSection jobs={openings}/>
      <ContactSection whiteAlternate={true}/>
      <FeedbackFormSection whiteAlternate={true}/>
    </>

  )
}

export default Careers