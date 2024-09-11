import React from 'react'
import ServiceBlock from '../pagecomponents/service-block'

const ServicesSection: React.FC = () => {
    return (
        <div className='section px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Services</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>A Look Into the Many Healthcare Services We Provide</h2>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row'>
                    <ServiceBlock 
                        title='Skilled Nursing' 
                        content={`Advanced Healthcare Services, LLC nurses oversee patient progress, and assist the patients and caregivers to understand: \nStages of illness and recovery \nTreatments, diet, and medication, \nSymptoms in Recurring Illness`}
                        icon='icon1' 
                    />
                    <ServiceBlock 
                        title='Physical Therapy'
                        content='Advanced Healthcare Services, LLC evaluates and develops a plan of treatment and establishes home programs to improve mobility, transfer skills, ambulation, gait, balance and coordination.'
                        icon='icon2'
                    />
                    <ServiceBlock 
                        title='Home Health Aids'
                        content='Advanced Healthcare Services, LLC employs state certified nurse assistants who are trained to assist patients with their personal care, hygiene, grooming, and activities of daily living.'
                        icon='icon3'
                    />
                    <ServiceBlock 
                        title='Medical Equipment'
                        content='Advanced Healthcare Services, LLC can arrange for rental and/or purchase of wheelchairs, walkers, special beds, or any assistive devices which may be needed.'
                        icon='icon4'           
                    />
                </div>
                <div className='flex flex-col md:flex-row'>
                    <ServiceBlock 
                        title='Medical Social Worker'
                        content='Advanced Healthcare Services, LLC provides social workers that can provide knowledge and information about community resources. As well as social and emotional support for patients and caregivers.'
                        icon='icon5'
                    />
                    <ServiceBlock 
                        title='Occupational Therapy'
                        content='Advanced Healthcare Services, LLC evaluates and provide a plan of care in the use of therapeutic , creative self-care activities of daily living and adaption to their living environment.'
                        icon='icon6'
                    />
                    <ServiceBlock 
                        title='Speech Therapy'
                        content={`Advanced Healthcare Services, LLC will evaluate and provide treatment for patients to improve their communication skills. Speech Therapists will also evaluate the patient's ability to swallow safe.`}
                        icon='icon7'
                    />
                    <ServiceBlock 
                        title='Other Services'
                        content='Advanced Healthcare Services, LLC upon your request, can coordinate other services such as finding homemakers, companions or sitters.'
                        icon='icon8'
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection