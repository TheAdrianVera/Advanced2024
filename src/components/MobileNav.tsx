import React from 'react'
import { TiThMenu } from "react-icons/ti"
import Logo from './Logo'
import { Link } from 'react-router-dom'

interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    return (
        <div className={`${className} flex flex-row items-center justify-between px-5 w-[100%]`}>
            <Link to="/">
                <Logo size={40} className=''/>
            </Link>
            <TiThMenu className='hover:text-advancedLightBlue' size={32}/>
        </div>
    )
}

export default MobileNav