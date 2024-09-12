import React from 'react'

interface TeamMember {
    name: string
    title: string
    imgUrl: string
}

interface TeamSectionProps {
    team: TeamMember[]
}


const TeamSection: React.FC<TeamSectionProps> = ({team}) => {
    return (
        <div id='teamSection' className='section px-5 md:px-20 bg-white'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title'>Our Team</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Get to Know Our Amazing Team</h2>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    {team.map((member, index) => (
                        <div key={index} className='flex flex-col lg:flex-row pb-5'>
                            <div className='w-full lg:w-1/3'>
                                <img src={member.imgUrl} alt={member.name} className='w-full h-auto' />
                            </div>
                            <div className='w-full lg:w-2/3'>
                                <h3 className='text-xl font-arial-narrow text-gray-800 mb-2'>{member.name}</h3>
                                <p className='text-gray-700'>{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TeamSection