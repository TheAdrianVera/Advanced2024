import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'

const Careers: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Careers at Advanced' 
        subtitle='Join our Advanced team and make a difference.' 
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <div>
        <h1>Careers Page</h1>
        <p>Need a job?</p>
      </div>
    </>

  )
}

export default Careers