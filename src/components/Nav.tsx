import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
interface NavProps {
    className?: string
}

const Nav: React.FC<NavProps> = ({className}) => {
    return (

            <nav className={`${className} hidden md:flex flex-row items-center justify-between w-[100%] px-5`}>
                <Link to="/">
                    <Logo size={40} className=''/>
                </Link>
                <ul className="flex space-x-4">
                    <li className='hover:text-advancedLightBlue'><Link to="/">Home</Link></li>
                    <li className='hover:text-advancedLightBlue'><Link to="/careers">Careers</Link></li>
                    <li className='hover:text-advancedLightBlue'><Link to="/about">About</Link></li>
                    <li className='hover:text-advancedLightBlue'><Link to="/services">Services</Link></li>
                    <li className='hover:text-advancedLightBlue'><Link to="/community">Community</Link></li>
                    <li className='hover:text-advancedLightBlue'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>


    )
}

export default Nav