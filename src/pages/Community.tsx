import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'

const Community: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Advanced Community' 
        subtitle='Learn more about our amazing Advanced Community.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <div>
        <h1>Community Page</h1>
        <p>We are one.</p>
      </div>
    </>

  )
}

export default Community