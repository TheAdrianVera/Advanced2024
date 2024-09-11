import React from 'react'

const CoverageAreasSection: React.FC = () => {
    return (
        <div className='section px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-10'>Coverage Areas</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Illinois Counties We Cover</h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className=''>
                    MAP ITEMS
                </div>
                <div className=''>   
                    MAP SECTION
                </div>
            </div>
        </div>
    )
}

export default CoverageAreasSection