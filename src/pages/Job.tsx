import React from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../data/jobs'

const Job: React.FC = () => {
  const { jobPath } = useParams<{ jobPath: string }>()
  const job = jobs.find(j => j.path === jobPath)

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.content}</p>
    </div>
  )
}

export default Job