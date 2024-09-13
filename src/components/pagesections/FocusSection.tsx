import React from 'react'


interface FocusSectionProps {
    title: string
    description: string
}

const FocusSection:React.FC<FocusSectionProps> = ({title, description}) => {
    return (
        <div className='section bg-advancedNavyBlue text-white px-5 md:px-20 pb-20'>
            <div className='flex justify-center py-10'>
                <h1 className='section-title'>{title}</h1>
            </div>
            <div className='flex flex-col sm:mx-10 md:mx-20 lg:mx-40'>
                <p className='text-xl font-arial-italic'>{description}</p>
            </div>
            
        </div>
    )
}

export default FocusSection