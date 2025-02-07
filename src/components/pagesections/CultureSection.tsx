import React from "react"

const culuturePhotoGalleryUrls = [
    {
        url: 'https://d3978e1lxwwpv4.cloudfront.net/career/advancecareertop1.jpg',
        alt: 'Advanced Team Member with Advanced Dog at Office'
    },
    {
        url: 'https://d3978e1lxwwpv4.cloudfront.net/career/advancecareertop3.jpg',
        alt: 'Advanced Team Posing In Front of Office'
    },
    {
        url: 'https://d3978e1lxwwpv4.cloudfront.net/career/advancecareertop2.JPG',
        alt: 'Advanced Team Member Taking Patient Vitals'
    }
]

const CultureSection: React.FC = () => {
    return (
        <div id='culture' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <h1 className='section-title mb-4'>Our Culture</h1>
                <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Experience the vibrant culture at our company</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 lg:mx-10 xl:mx-40'>
                {culuturePhotoGalleryUrls.map((photo, index) => (
                    <div key={index} className='relative group'>
                        <img 
                            src={photo.url} 
                            alt={photo.alt} 
                            className='w-full h-64 md:h-auto object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
                        />
                    </div>
                ))}
            </div>
            <div className='mt-10 text-center lg:mx-10 xl:mx-40 p-6 bg-blue-200 rounded-lg shadow-lg'>
                <p className='text-lg text-advancedDarkBlue font-arial-rounded'>
                    Our culture is built on collaboration, innovation, and a commitment to excellence. We believe in fostering a supportive and inclusive environment where everyone can thrive.
                </p>
            </div>
        </div>
    )
}

export default CultureSection