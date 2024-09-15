import React from "react"
import { FaFacebook } from "react-icons/fa"


const biggestHeartAwards = [
    {
        name: 'Illinois Assistive Technology Program',
        period: 'May 2024 Winner',
        year: '2024',
        content1: 'Our Biggest Heart Award goes to Illinois Assistive Technology Program!',
        content2: 'The impact they have on our community unequivocally has changed countless lives. Because of the dedicated staff and countless accessible programs, we have witnessed individuals in our community thrive while maintaining their independence.',
        link: 'https://www.facebook.com/share/p/Ma2FN7xroYzpkeWx/',
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/bh-kelley.png',
        imgAlt: 'Biggest Heart Award Winners Posing and Smiling',

    },
    {
        name: 'Misty Duncan',
        period: 'February 2024 Winner',
        year: '2024',
        content1: 'Our Winter Biggest Heart Award goes to Misty Duncan the Assistant Executive Director at Mary Bryant Home For the Blind and Visually Impaired',
        content2: 'Misty has gone above and beyond in being an advocate for Blind and Visually impared residents. Thank you for everything you do for the residents!',
        link: 'https://www.facebook.com/share/p/ifvkevcEEcUcjUAf/',
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/mistyduncan.png',
        imgAlt: 'Biggest Heart Award Winners Posing and Smiling with their Award',
    },
    {
        name: 'Kelley Tireny',
        period: 'November 2023 Winner',
        year: '2023',
        content1: 'We love celebrating the Biggest Hearts in our community.',
        content2: 'Kelley cares deeply, loves big and spreads joy and compassion to all that meet her. Thank you Kelley King Tierne from Carriage Crossing Rochester for so generously impacting the lives of our seniors.',
        link: 'https://www.facebook.com/share/p/YWk43Wt5W7pa8n8k/',
        imgUrl: 'https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/biggest_heart.png',
        imgAlt: 'Biggest Heart Award Winners Posing and Presenting their Award',
    },
]

const CommunityBiggestHeartSection: React.FC = () => {
    return (
        <div id='community-biggest-heart' className='section px-5 md:px-20 bg-advancedNavyBlue text-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Biggest Heart Award</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Help Us Celebrate Biggest Heart Award Winners!</h2>
                </div>
            </div>
            <div>
                {biggestHeartAwards.map((award, index) => (
                    <div key={index} className='flex flex-col items-center pb-10'>
                        <h2 className='text-xl font-arial-narrow-rounded md:text-2xl mb-6'>{award.period} {award.year}</h2>
                        <div className='flex flex-col items-center'>
                            <img src={award.imgUrl} alt={award.imgAlt} className='w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6' />
                            <h3 className='text-xl font-arial-rounded-bold text-gray-200 mb-6'>{award.name}</h3>
                            <p className='text-lg text-gray-200 w-full md:w-[50%]'>{award.content1}</p>
                            <p className='text-lg text-gray-200 w-full pt-5 md:w-[50%]'>{award.content2}</p>
                            <a href={award.link} target='_blank' rel='noreferrer' className='flex flex-row items-center text-blue-500 hover:text-blue-700 mt-6'>
                                <FaFacebook className='mr-2' />
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommunityBiggestHeartSection