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
        <div id='teamSection' className='section px-5 md:px-20 bg-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Our Team</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Get to Know Our Amazing Team</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {team.map((member, index) => (
                    <div key={index} className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <div className='w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4'>
                            <img src={member.imgUrl} alt={member.name} className='w-full h-full object-cover' />
                        </div>
                        <h3 className='text-xl font-arial-narrow text-gray-800 mb-2'>{member.name}</h3>
                        <p className='text-gray-700'>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamSection