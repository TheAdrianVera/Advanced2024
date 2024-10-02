import React from 'react'
import { useParams } from 'react-router-dom'

interface JobProps {
  href: string
  text: string
}


const Job: React.FC<JobProps> = ({href, text}) => {

  return (
    <div>
      <h1>{href}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Job