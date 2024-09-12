import React, { useState } from 'react'

const CoverageAreasSection: React.FC = () => {
    const [currentCoverageId, setCurrentCoverageId] = useState('')

    const handleMouseEnter = (id:string) => {
        console.log(`Mouse Enter-${id.toLowerCase().replace(/\s+/g, '-')}`)
        setCurrentCoverageId(`-${id.toLowerCase().replace(/\s+/g, '-')}`)
    }

    const handleMouseLeave = () => {
        setCurrentCoverageId('')
        console.log('Mouse Leave')
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
        <div className='section bg-advancedNavyBlue text-white px-5 md:px-20 px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-10'>Coverage Areas</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Illinois Counties We Cover</h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-[50%] flex flex-col justify-center items-center'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {coverageLocations.map((location, index) => (
                            <li 
                                key={index} 
                                id={location} 
                                className='p-3 bg-advancedLightBlue text-center text-black hover:text-white rounded-md hover:bg-advancedDarkBlue transition-colors duration-300'
                                onMouseEnter={() => handleMouseEnter(location)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {location} County
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-[50%] flex flex-col justify-center items-center'>   
                    <img className='h-[32rem] w-auto' src={`/src/assets/map/coverage_map${currentCoverageId}.png`}></img>
                </div>
            </div>
        </div>
    )
}

export default CoverageAreasSection

                    {/* 
                        TODO:
                        - Fix ul and li styling
                        - Add hover effect to li elements
                        - Add hover functionality to map section
                            - Changing the map to show the selected county
                        - Add map section
                        - Add map section hover effect -- if time allows
                            - idea would be to have a tooltop when covering over a county
                            - tooltip would show the county name
                            - the corresponding li element would also be highlighted
                    */}

