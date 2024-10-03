import React from 'react'
import { useParams } from 'react-router-dom'

import PageBanner from '../components/pagesections/banners/PageBanner'

interface JobProps {
  position: string
  path: string 
  type: string
  city: string
  state: string
  url: string
  text: string
  stateAbbrev: string
  acronym: string | null
  listingDescriptionHtml: string
  department: string
  applyButtonsHtml: string | ''
}


const Job: React.FC<JobProps> = ({position, listingDescriptionHtml, applyButtonsHtml}) => {

  return (
    <>
      <PageBanner title={position} backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'/>
      <div className='job section text-center'>
        <div className='flex flex-col justify-center items-center' dangerouslySetInnerHTML={{ __html: listingDescriptionHtml }} />
        <div className='' dangerouslySetInnerHTML={{__html: applyButtonsHtml}} />
      </div>
    </>

  )
}

export default Job