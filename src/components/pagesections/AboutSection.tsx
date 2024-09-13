
const aboutData = {
    section1Title: 'Who We Are',
    section1Para1: 'At Advanced Healthcare Services, LLC, we are focused on providing home health services with the highest levels of patient satisfaction.',
    section1Para2: 'We will do everything we can to meet your expectations. With a variety of services - from Skilled Nursing to Podiatry - we’re sure you’ll be happy working with us.',
    section2Title: 'Home Health Care',
    section2Para1: 'Home health care allows patients to maintain quality of life and receive personlized health care in the comfort of their home.',
    section2Para2: 'In addition ot being a cost-effective option for receiving health care services, home health promotes quicker recover and improves the quality of life for both patient and their family.',
    section3Title: 'Criteria For Homebound Status',
    section3SubTitle: `The following criteria are considered when determining homebound status. To be considered homebound, both criteria one and two must be met.`,
    section3Criteria: [
        {
            content1: `Beneficiary's medical condition restricts the ability to leave home without the assistance of another individual or without the assistance of a supportive device.`,
            content2: `The beneficiary's medical condition should restrict the ability to leave home.`,
            content3: 'If, however, the the beneficiary chooses to leave home frequently, even though leaving home requires a considerable and taxing effort, the beneficiary would not be considered homebound.'
        },
        {
            content1: 'Beneficiary leaves home only to receive medical treatment that generally cannot be provided in the home.',
            content2: 'Leaves the home infrequently; for short periods for non-medical purposes or to attend a religious service or unique event such as a funeral or graduation, and these absences do not indicate the beneficiary has the ability to obtain health care provided outside the home, then the beneficiary may still be considered homebound.',
            content3: `To determine whether the beneficiary has the general ability to leave the home, look at the beneficiary's condition over a period of a time rather than short periods within the home health stay.`
        }
    ],
    videoUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/advanced_home_video.mp4',
    videoPoster: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/home-video-ph.png',
}

const AboutSection = () => {
    return (
        <div id='aboutSection' className='section px-5 md:px-20 bg-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>About Advanced</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Learn More About the High Quality Healthcare We Provide</h2>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <video controls poster={aboutData.videoPoster} className='w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg'>
                    <source src={aboutData.videoUrl} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
                <div className='flex flex-row pt-20 w-full md:w-3/4 lg:w-2/3'>
                    <div className='flex flex-col pb-5 mr-3'>
                        <h2 className='text-xl font-arial-rounded-bold md:text-2xl text-gray-800 mb-6'>{aboutData.section1Title}</h2>
                        <p className="mb-2 h-24 text-lg">{aboutData.section1Para1}</p>
                        <p className='text-lg'>{aboutData.section1Para2}</p>
                    </div>
                    <div className='flex flex-col pb-5 ml-3'>
                        <h2 className='text-xl font-arial-rounded-bold md:text-2xl text-gray-800 mb-6'>{aboutData.section2Title}</h2>
                        <p className='mb-2 h-24 text-lg'>{aboutData.section2Para1}</p>
                        <p className='text-lg'>{aboutData.section2Para2}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-arial-rounded-bold md:text-2xl text-gray-800 mb-6'>{aboutData.section3Title}</h2>
                <h3 className='text-lg font-arial-rounded-bold text-gray-800 mb-6'>{aboutData.section3SubTitle}</h3>
                <div className='flex flex-col w-full md:w-3/4 lg:w-2/3'>
                    {aboutData.section3Criteria.map((criteria, index) => (
                        <div key={index} className='flex flex-col p-6 bg-gray-100 rounded-lg shadow-lg mb-6'>
                            <p className='text-gray-700 text-lg'>{criteria.content1}</p>
                            <p className='text-gray-700 text-lg'>{criteria.content2}</p>
                            <p className='text-gray-700 text-lg'>{criteria.content3}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutSection