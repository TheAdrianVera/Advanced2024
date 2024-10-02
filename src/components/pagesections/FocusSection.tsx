import React from 'react'


interface FocusSectionProps {
    title: string
    description: string
}

const FocusSection: React.FC<FocusSectionProps> = ({title, description}) => {
    return (
        <div className='section bg-advancedNavyBlue text-white px-5 md:px-20 pb-20'>
            <div className='flex justify-center py-10'>
                <h1 className='section-title'>{title}</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl font-arial-italic w-full md:w-3/4 lg:w-2/3'>{description}</p>
            </div>
            
        </div>
    )
}

export default FocusSection