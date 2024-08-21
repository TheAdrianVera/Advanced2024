import React from 'react'
import { TiThMenu } from "react-icons/ti"
import Logo from './Logo'

interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    return (
        <div className={`${className} flex flex-row items-center justify-between px-5 w-[100%]`}>
            <Logo size={40} className='ml-2'/>
            <TiThMenu className='hover:text-advancedLightBlue' size={32}/>
        </div>
    )
}

export default MobileNav