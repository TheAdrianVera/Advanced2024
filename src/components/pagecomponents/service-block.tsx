import React from 'react'
import { FaBed } from 'react-icons/fa'
import { FaStethoscope } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FaWheelchair } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import { FaMedkit } from 'react-icons/fa'
import { FaHandHoldingMedical } from 'react-icons/fa'

interface ServiceBlockProps {
    title: string
    content: string
    iconLabel: string
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({title, content, iconLabel}) => {
    
    const icon = (iconLabel: string) => {
        switch(iconLabel) {
            case 'iconLabel1':
                return <FaStethoscope className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel2':
                return <FaUniversalAccess className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel3':
                return <FaBed className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel4':
                return <FaWheelchair className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel5':
                return <FaUserMd className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel6':
                return <FaRegPlusSquare className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel7':
                return <FaMedkit className='text-8xl text-advancedNavyBlue' />
            case 'iconLabel8':
                return <FaHandHoldingMedical className='text-8xl text-advancedNavyBlue' />
            default:
                return <FaStethoscope className='text-8xl text-advancedNavyBlue' />
        }
    }

    return (
        <div className='flex flex-col w-[100%] md:w-[25% px-2 py-5 md:py-2'>
            <div className='flex flex-col items-center'>
                <div className='pb-2'>{icon(iconLabel)}</div>
                <div className='text-3xl lg:text-2xl font-arial-bold py-2'>{title}</div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-arial-narrow text-xl pt-3 w-[90%] lg:w-[100%]'>{content}</div>
            </div>
            
        </div>
    )
}

export default ServiceBlock