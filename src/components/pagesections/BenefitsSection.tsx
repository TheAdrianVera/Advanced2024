import React from 'react'
import BenefitBlock from '../pagecomponents/benefit-block'

interface Benefit {
    title: string
    content: string
    iconLabel: string
}

interface BenefitsSectionProps {
    benefitsData: Benefit[]
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({benefitsData}) => {
    return (
        <div id='benefits' className='section px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Benefits</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>We care for our team and show that by giving amazing benefits to our staff.</h2>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col lg:flex-row pb-5'>
                    {benefitsData.map((benefit, index) => (
                        index < 4 ? (
                            <BenefitBlock 
                                key={index}
                                title={benefit.title}
                                content={benefit.content}
                                iconLabel={benefit.iconLabel}
                            />
                        ) : null
                    ))}
                </div>
                <div className='flex flex-col lg:flex-row pb-5'>
                    {benefitsData.map((benefit, index) => (
                        index > 3 ? (
                            <BenefitBlock 
                                key={index}
                                title={benefit.title}
                                content={benefit.content}
                                iconLabel={benefit.iconLabel}
                            />
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitsSection