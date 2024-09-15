import React, { useState } from 'react'

const CoverageAreasSection: React.FC = () => {
    const [currentCoverageId, setCurrentCoverageId] = useState('')
    const [isFading, setIsFading] = useState(false)

    const handleMouseEnter = (id: string) => {
        setIsFading(true)
        setTimeout(() => {
            setCurrentCoverageId(`-${id.toLowerCase().replace(/\s+/g, '-')}`)
            setIsFading(false)
        }, 130) // Half of the transition duration
    }

    const handleMouseLeave = () => {
        setIsFading(true)
        setTimeout(() => {
            setCurrentCoverageId('')
            setIsFading(false)
        }, 130) // Half of the transition duration
    }
    
    const coverageLocations = [
        "Brown",
        "Cass",
        "Christian",
        "Logan",
        "Macon",
        "Macoupin",
        "Mason",
        "Menard",
        "Montgomery",
        "Morgan",
        "Sangamon",
        "Schuyler",
        "Scott"
    ]

    return (
        <div id='coverageAreas' className='section bg-advancedNavyBlue text-white px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-10'>Coverage Areas</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Illinois Counties We Cover</h2>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 lg:mx-10 xl:mx-40'>
                <div className='w-[100%] md:w-auto flex flex-col justify-center items-center'>
                    <ul className='grid grid-cols-2 gap-4'>
                        {coverageLocations.map((location, index) => (
                            <li 
                                key={index} 
                                id={location} 
                                className='p-3 bg-blue-500 text-center text-white hover:text-advancedLightBlue rounded-md hover:bg-advancedDarkBlue transition-colors duration-300'
                                onMouseEnter={() => handleMouseEnter(location)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {location} County
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-auto hidden md:flex flex-col items-center'>   
                    <img 
                        className={`h-[32rem] w-auto transition-opacity ${isFading ? 'fade-out' : ''}`} 
                        src={`/src/assets/map/coverage_map${currentCoverageId}.png`}
                        alt='Coverage Map'
                    />
                </div>
            </div>
        </div>
    )
}

export default CoverageAreasSection

