import React from 'react'
import { Link } from 'react-router-dom'

interface OpenPositionBlockProps {
    job: any
    index: number
}

const OpenPositionBlock: React.FC<OpenPositionBlockProps> = ({job, index}) => {

    return (
        <Link to={`/careers/openings/${job.path}`} key={index} className="group flex flex-col items-center bg-advancedDarkBlue text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-advancedBlue hover:shadow-xl">
            <h3 className="text-xl md:text-2xl font-arial-rounded text-center mb-2">
                {job.position}
            </h3>
            <p className="text-lg md:text-xl font-arial text-center mb-3">
                Type:
                <span className='ml-1 text-blue-300 group-hover:text-advancedNavyBlue'>
                    {job.type === 'Full Time (TBD)' ? 'Full Time' : job.type}
                </span>
            </p>
            <p className="text-lg md:text-xl font-arial text-center mb-3">
                Department:
                <span className='ml-1 text-blue-300 group-hover:text-advancedNavyBlue'>{job.department}</span>
            </p>
            <p className="text-lg md:text-xl font-arial text-center mb-2">
                Location:
                <span className='ml-1 text-blue-300 group-hover:text-advancedNavyBlue'>
                    {job.city === 'Springfield Area' ? `Springfield, ${job.state}` : `${job.city}, ${job.state}`}
                </span>
            </p>
        </Link>
    )
}

export default OpenPositionBlock