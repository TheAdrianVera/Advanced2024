import React from 'react'
import { TiThMenu } from "react-icons/ti"

interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    return (
        <div className={`${className} flex flex-row items-center px-5`}>
            <TiThMenu className='hover:text-advancedLightBlue' size={32}/> 
        </div>
    )
}

export default MobileNav