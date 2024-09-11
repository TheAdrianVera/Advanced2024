import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'
import ContactSection from '../components/pagesections/ContactSection'

const About: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='About Our Practice' 
        subtitle='Learn more about the high quality Home Healthcare we provide.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <div>
        <h1>About Page</h1>
        <p>What's this all aboot.</p>
      </div>
      <ContactSection />
    </>

  )
}

export default About