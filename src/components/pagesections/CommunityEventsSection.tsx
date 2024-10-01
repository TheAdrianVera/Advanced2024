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
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6 text-center'>Learn more about the community events the Advanced Team puts on!</h2>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-arial-narrow-rounded md:text-2xl mb-6 underline'>2024 Community Easter Egg Hunt</h2>
                <p className="text-muted text-lg text-center w-full md:w-3/4 lg:w-2/3">
                    Thanks to our friends from
                    <a 
                        className="text-blue-500 hover:text-blue-700 ml-1"
                        href="https://www.springfieldsupportiveliving.com/" 
                        target="_blank">
                        Springfield Supportive Living
                    </a>, 
                    <a 
                        className="text-blue-500 hover:text-blue-700 ml-1"
                        href="https://synergyhomecare.com/il-bloomington-61761/" 
                        target="_blank">
                        Synergy Homecare of Central Illinois
                    </a>, 
                    <a
                        className="text-blue-500 hover:text-blue-700 mx-1" 
                        href="https://carriagecrossingsl.com/locations/rochester" 
                        target="_blank">
                        Carriage Crossing Rochester
                    </a> 
                    and 
                    <a 
                        className="text-blue-500 hover:text-blue-700 ml-1"
                        href="https://www.newschannel20.com/" 
                        target="_blank">
                        WICS ABC Newschannel 20.
                    </a>
                </p>
            </div>
            <div className='flex flex-col items-center mt-10 md:mt-10'>
                <div className='columns-2 md:columns-4 gap-4 '>
                    {easterEggHuntGallery.map((image, index) => (
                        <div key={index} className='mb-4'>
                            <img src={image.imgUrl} alt={image.alt} className='h-64 rounded-lg shadow-md transition-transform transform hover:scale-105' />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CommunityEventsSection