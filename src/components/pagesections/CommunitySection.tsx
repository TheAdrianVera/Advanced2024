const communityGallery = [
    // First Column
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/companyphoto2024.png',
        alt: 'Advanced Company Photo 2024',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career8.png',
        alt: 'Advanced Team Members Posing for a Picture',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community2.jpeg',
        alt: 'Advanced Patient Petting Advanced Dog',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community3.jpeg',
        alt: 'Advanced Healthcare Mobile (side view)',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/holiday2024/holidaytree-2.jpeg',
        alt: 'Advanced Holiday Party Celebration Staff Posing',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career9.jpg',
        alt: 'Advanced Team Members Posing in front of Advanced Healthcare Poster',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community1.jpeg',
        alt: 'Advanced Healthcare Community Members Posing in Fall Attire',
    },
    // Second Column
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/sangamon-county-+triad.jpg',
        alt: 'Sangamon County Triad Meeting',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/fb_ad_photo.JPG',
        alt: 'Advanced Healthcare Team Member taking Vidalsigns of a Patient',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community6.jpeg',
        alt: 'Advanced Team Members Posing at a Advanced Healthcare Table',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/senior-celebration-steering-commitee.jpg',
        alt: 'Senior Celebration Steering Commitee'
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/holiday2024/biggestheartwinter24.jpeg',
        alt: 'Biggest Heart Award Winner Winter 2024',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career3.jpg',
        alt: 'Advanced Team Member Posing with Advanced Dog',
    },
    // Third Column
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/presenting-1.jpg',
        alt: 'Presnting at a Meeting',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/careers7.jpg',
        alt: 'Advanced Team Members Posing in front of Office',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community5.jpeg',
        alt: 'Advanced Team Member Posing in front of Advanced Logo',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career1.jpg',
        alt: 'Advanced Team Posing with Medical Hats on',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/holiday2024/holidaytree-1.jpeg',
        alt: '2024 Holiday Party'
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community4.jpeg',
        alt: 'Advanced Team at Advanced Healthcare Table in Pirate Attire for Halloween',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career2.jpg',
        alt: 'Advanced Team Member Posing at Event',
    },
    // Forth Column
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/holiday2024/communitypresentation.jpeg',
        alt: 'Community Presentation',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/community8.jpg',
        alt: 'Advanced Team Members having a Meeting',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/kinds-daughter-fundraiser.jpg',
        alt: 'Kinds Daughter Fundraiser',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/nurse-week-23.png',
        alt: 'Nurse Week 2023'
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/man-and-dog.jpg',
        alt: 'Patient Petting Advanced Dog'
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/holiday2024/holiday-1.jpeg',
        alt: 'Staff at Holiday Party',
    },
    {
        imgUrl: 'https://d3978e1lxwwpv4.cloudfront.net/career/career4.jpg',
        alt: 'Advanced Holiday Greeting Card',
    },

]

const CommunitySection: React.FC = () => {
    return (
        <div id='community' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Our Community</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6 text-center'>See some of the amazing faces that make our amazing Advanced Team!</h2>
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