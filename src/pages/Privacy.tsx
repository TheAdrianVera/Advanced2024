import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

import PageBanner from '../components/pagesections/banners/PageBanner'
import PrivacySection from '../components/pagesections/PrivacySection'

interface PrivacyProps {
    updateCookieAcceptance: () => void
}

const Privacy: React.FC<PrivacyProps> = ({updateCookieAcceptance}) => {
    useEffect(()=>{
        ReactPixel.track('ViewContent', {
          page: 'Privacy',
          content_ids: ['/privacy'],
          content_type: 'page'
        })
    
        ReactGA.send({ hitType: 'pageview', page: '/privacy', title: 'Privacy' })
      }, [])

    return (
        <>
            <Helmet>
                <title>Privacy | Advanced Healthcare Services, LLC.</title>
                <meta name='description' content='Learn more about our Privacy Policy.' />
                <meta name='author' content='Advanced Healthcare Services LLC.' />
                <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
                <meta property='og:title' content='Privacy | Advanced Healthcare Services LLC.' />
                <meta property='og:description' content='Learn more about our Privacy Policy.' />
                <meta property='og:image' content='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/advanced-background-thumbnail.png' />
                <meta property='og:url' content='https://ahsllc.org/privacy' />
            </Helmet>
            <PageBanner 
                title={'Privacy'}
                backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
            />
            <PrivacySection 
                toggleAcceptance={updateCookieAcceptance}
            />
        </>
    )
}

export default Privacy