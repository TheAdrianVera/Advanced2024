import React from 'react'
import { FaWheelchairMove } from "react-icons/fa6"
import { FaMedkit } from "react-icons/fa"
import { FaPlaneDeparture } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaHeartbeat } from "react-icons/fa"
import { FaCar } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { FaRegIdBadge } from "react-icons/fa";

interface BenefitBlockProps {
    title: string
    content: string
    iconLabel: string
}

const BenefitBlock: React.FC<BenefitBlockProps> = ({title, content, iconLabel}) => {
    
    const icon = (iconLabel: string) => {
        switch(iconLabel) {
            case 'retire':
                return <FaWheelchairMove className='text-8xl text-advancedNavyBlue' />
            case 'insurance':
                return <FaMedkit className='text-8xl text-advancedNavyBlue' />
            case 'pto':
                return <FaPlaneDeparture className='text-8xl text-advancedNavyBlue' />
            case 'maternity':
                return <FaHome className='text-8xl text-advancedNavyBlue' />
            case 'hc':
                return <FaHeartbeat className='text-8xl text-advancedNavyBlue' />
            case 'mileage':
                return <FaCar className='text-8xl text-advancedNavyBlue' />
            case 'mentorship':
                return <FaMedkit className='text-8xl text-advancedNavyBlue' />
            case 'training':
                return <FaUserGroup className='text-8xl text-advancedNavyBlue' />
            default:
                return <FaRegIdBadge className='text-8xl text-advancedNavyBlue' />
        }
    }

    return (
        <div className='flex flex-col w-[100%] md:w-[25% px-2 py-5 md:py-2'>
            <div className='flex flex-col items-center'>
                <div className='pb-2'>{icon(iconLabel)}</div>
                <div className='text-3xl md:text-2xl font-arial-bold py-2 text-center'>{title}</div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-arial-narrow text-xl pt-3 w-[90%] lg:w-[100%]'>{content}</div>
            </div>
            
        </div>
    )
}

export default BenefitBlock