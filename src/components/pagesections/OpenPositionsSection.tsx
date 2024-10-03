import React from 'react'
import { Link } from 'react-router-dom'

interface OpenPositionsSectionProps {
    jobs: any[]
}


const OpenPositionsSection: React.FC<OpenPositionsSectionProps> = ({jobs}) => {
    return (
        <div id='open-positions' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <h1 className='section-title mb-4'>Open Positions</h1>
                <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Come join our amazing team!</h2>
            </div>
            <div className="container mx-auto p-4">
                <div className="mb-16">
                    <h1 className="text-3xl font-bold text-center mb-4">Full Time Positions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job, index) => (
                            (job.type === 'Full Time' || job.type === 'Full Time (TBD)') && (
                                <div key={index} className="flex flex-col items-center bg-advancedDarkBlue text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <h3 className="text-2xl font-arial-rounded text-center mb-2">{job.position}</h3>
                                    <p className="text-lg font-arial-narrow-italic text-center mb-4">{job.city}, {job.stateAbbrev}</p>
                                    <Link to={`/careers/openings/${job.path}`} className="text-lg font-arial-rounded text-center underline hover:text-blue-300">{job.text}</Link>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4">Part Time Positions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job, index) => (
                            (job.type === 'Part Time' || job.type === '8 Hour Shifts' || job.type === 'Weekends') && (
                                <div key={index} className="flex flex-col items-center bg-advancedDarkBlue text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <h3 className="text-2xl font-arial-rounded text-center mb-2">{job.position}</h3>
                                    <p className="text-lg font-arial-narrow-italic text-center mb-4">{job.city}, {job.stateAbbrev}</p>
                                    <a href={job.url} target="_blank" className="text-lg font-arial-rounded text-center underline hover:text-blue-300">{job.text}</a>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenPositionsSection