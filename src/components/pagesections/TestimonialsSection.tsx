import React from 'react'

interface Testimonial {
    name: string
    content: string
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({testimonials}) => {
    return (
        <div id='testimonialsSection' className='section px-5 md:px-20 bg-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Testimonials</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Hear From Our Clients About Our Service</h2>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 lg:mx-10 xl:mx-40'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center p-10 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105'
                    >
                        <div className='w-full h-full flex flex-col items-center justify-between'>
                            <p className='text-gray-700 text-center font-arial-italic p-2'>{`" ${testimonial.content} "`}</p>
                            <h3 className='text-xl font-arial-rounded text-gray-800 mt-4'>{testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialsSection