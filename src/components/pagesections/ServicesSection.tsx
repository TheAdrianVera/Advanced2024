import React from 'react'
import ServiceBlock from '../pagecomponents/service-block'

const servicesData = [
    {
        title: 'Skilled Nursing',
        content: `Advanced Healthcare Services, LLC nurses oversee patient progress, and assist the patients and caregivers to understand: \nStages of illness and recovery \nTreatments, diet, and medication, \nSymptoms in Recurring Illness`,
        iconLabel: 'iconLabel1',
    },
    {
        title: 'Physical Therapy',
        content: 'Advanced Healthcare Services, LLC evaluates and develops a plan of treatment and establishes home programs to improve mobility, transfer skills, ambulation, gait, balance and coordination.',
        iconLabel: 'iconLabel2'
    },
    {
        title: 'Home Health Aids',
        content: 'Advanced Healthcare Services, LLC employs state certified nurse assistants who are trained to assist patients with their personal care, hygiene, grooming, and activities of daily living.',
        iconLabel: 'iconLabel3'
    },
    {
        title: 'Medical Equipment',
        content: 'Advanced Healthcare Services, LLC can arrange for rental and/or purchase of wheelchairs, walkers, special beds, or any assistive devices which may be needed.',
        iconLabel: 'iconLabel4'
    },
    {
        title: 'Medical Social Worker',
        content: 'Advanced Healthcare Services, LLC provides social workers that can provide knowledge and information about community resources. As well as social and emotional support for patients and caregivers.',
        iconLabel: 'iconLabel5'
    },
    {
        title: 'Occupational Therapy',
        content: 'Advanced Healthcare Services, LLC evaluates and provide a plan of care in the use of therapeutic , creative self-care activities of daily living and adaption to their living environment.',
        iconLabel: 'iconLabel6'
    },
    {
        title: 'Speech Therapy',
        content: `Advanced Healthcare Services, LLC will evaluate and provide treatment for patients to improve their communication skills. Speech Therapists will also evaluate the patient's ability to swallow safe.`,
        iconLabel: 'iconLabel7'
    },
    {
        title: 'Other Services',
        content: 'Advanced Healthcare Services, LLC upon your request, can coordinate other services such as finding homemakers, companions or sitters.',
        iconLabel: 'iconLabel8'
    }
]

const ServicesSection: React.FC = () => {
    return (
        <div id='services' className='section px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Services</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>A Look Into the Many Healthcare Services We Provide</h2>
                </div>
            </div>
            <div className='flex flex-col items-center pb-20' >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-5 w-full md:w-3/4 lg:w-2/3'>
                    {servicesData.map((service, index) => (
                        index < 4 ? (
                            <ServiceBlock
                                key={index}
                                title={service.title}
                                content={service.content}
                                iconLabel={service.iconLabel}
                            />
                        ) : null
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-5 w-full md:w-3/4 lg:w-2/3'>
                    {servicesData.map((service, index) => (
                        index > 3 ? (
                            <ServiceBlock
                                key={index}
                                title={service.title}
                                content={service.content}
                                iconLabel={service.iconLabel}
                            />
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection