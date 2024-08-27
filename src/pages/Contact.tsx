import React from 'react'
import ContactSection from '../components/pagesections/ContactSection'
import PageBanner from '../components/pagesections/PageBanner'

const Contact: React.FC = () => {
  return (
    <>
      <PageBanner title='Contact Our Team' subtitle='Let’s work together—contact us today.' />
      <ContactSection />
    </>

  )
}

export default Contact