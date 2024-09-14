const easterEggHuntGallery = [
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/eastereggy.png',
        alt: 'Advanced Healthcare Easter Egg Hunt Participants Posing for a Picture',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/eastereggz.png',
        alt: 'Advanced Healthcare Easter Egg Hunt Participants Posing for a Picture and Cheering',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/eastereggx.png',
        alt: 'Advanced Healthcare Easter Egg Hunt Participants Examinining their Egg Bags',
    },
    {
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/eastereggw.png',
        alt: 'Advanced Healthcare Easter Egg Hunt Participants Showing off their Egg Bags',
    }
]

const CommunityEventsSection:React.FC = () => {
    return (
        <div id='community-events' className='section px-5 md:px-20 bg-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Community Events</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Learn more about the community events the Advanced Team puts on!</h2>
                </div>
            </div>
        </div>

    )
}

export default CommunityEventsSection