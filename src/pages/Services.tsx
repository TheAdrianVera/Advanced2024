import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'

const Services: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Our Healthcare Services' 
        subtitle='Learn more about the many Healthcare Services we provide.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <div>
        <h1>Service Page</h1>
        <p>Service Secret</p>
      </div>
    </>

  )
}

export default Services