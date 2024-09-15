const communityGallery = [
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career8.png',
        alt: 'Advanced Team Members Posing for a Picture',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community2.jpeg',
        alt: 'Advanced Patient Petting Advanced Dog',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community3.jpeg',
        alt: 'Advanced Healthcare Mobile (side view)',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career9.jpg',
        alt: 'Advanced Team Members Posing in front of Advanced Healthcare Poster',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community1.jpeg',
        alt: 'Advanced Healthcare Community Members Posing in Fall Attire',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/fb_ad_photo.JPG',
        alt: 'Advanced Healthcare Team Member taking Vidalsigns of a Patient',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community6.jpeg',
        alt: 'Advanced Team Members Posing at a Advanced Healthcare Table',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career3.jpg',
        alt: 'Advanced Team Member Posing with Advanced Dog',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/careers7.jpg',
        alt: 'Advanced Team Members Posing in front of Office',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community5.jpeg',
        alt: 'Advanced Team Member Posing in front of Advanced Logo',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career1.jpg',
        alt: 'Advanced Team Posing with Medical Hats on',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community4.jpeg',
        alt: 'Advanced Team at Advanced Healthcare Table in Pirate Attire for Halloween',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career2.jpg',
        alt: 'Advanced Team Member Posing at Event',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/career4.jpg',
        alt: 'Advanced Holiday Greeting Card',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/career/community8.jpg',
        alt: 'Advanced Team Members having a Meeting',
    }
]

const CommunitySection: React.FC = () => {
    return (
        <div id='community' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Our Community</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>See some of the amazing faces that make our amazing Advanced Team!</h2>
                </div>
                <div className='columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 w-full md:w-3/4 lg:w-2/3'>
                    {communityGallery.map((image, index) => (
                        <div key={index} className='mb-4 break-inside-avoid'>
                            <img src={image.imgUrl} alt={image.alt} className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommunitySection