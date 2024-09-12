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

            </div>

        </div>
    )
}

export default TeamSection