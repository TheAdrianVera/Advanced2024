import React from 'react'
import OpenPositionBlock from '../pagecomponents/open-position-block'

interface OpenPositionsSectionProps {
    jobs: any[]
}


const OpenPositionsSection: React.FC<OpenPositionsSectionProps> = ({jobs}) => {
    if(jobs.length === 0) {
        return (
            <div id='open-positions' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
                <div className='flex flex-col items-center py-10'>
                    <h1 className='section-title mb-4'>Open Positions</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>No positions available at the moment. Please check back later!</h2>
                </div>
            </div> 
        )
    }

    return (
        <div id='open-positions' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <h1 className='section-title mb-4'>Open Positions</h1>
                <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Come join our amazing team!</h2>
            </div>
            <div className="container mx-auto p-4">
                <div className="mb-16">
                    <h1 className="text-3xl font-bold text-center mb-8 md:mb-16 underline">Full Time Positions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job, index) => (
                            (job.type === 'Full Time' || job.type === 'Full Time (TBD)') && (
                                <OpenPositionBlock job={job} index={index} key={index}/>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default OpenPositionsSection