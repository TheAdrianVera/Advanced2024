import React from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../data/jobs'

interface JobProps {
  title: string
  content: string
}


const Job: React.FC<JobProps> = ({title, content}) => {

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Job