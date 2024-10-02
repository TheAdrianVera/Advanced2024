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
}


const Job: React.FC<JobProps> = ({position, path, acronym, type, city, state, url, text, stateAbbrev}) => {

  return (
    <div>
      <h1>{url}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Job