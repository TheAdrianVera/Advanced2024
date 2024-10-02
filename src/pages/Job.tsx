import React from 'react'
import { useParams } from 'react-router-dom'

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
}


const Job: React.FC<JobProps> = ({position, path, acronym, type, city, state, url, text, stateAbbrev, listingDescriptionHtml}) => {

  return (
    <div className='section text-center'>
      <div className='flex flex-col justify-center items-center' dangerouslySetInnerHTML={{ __html: listingDescriptionHtml }} />
    </div>
  )
}

export default Job