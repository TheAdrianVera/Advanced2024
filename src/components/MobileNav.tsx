import React, { useState, useEffect } from 'react'
import Logo from './logos/Logo'
import { TiThMenu } from "react-icons/ti"
import { Link, useLocation } from 'react-router-dom'
import { TiHome } from "react-icons/ti"
import { PiBooksFill } from "react-icons/pi"
import { FaNotesMedical } from "react-icons/fa"
import { MdGroups } from "react-icons/md"
import { FaHandHoldingMedical } from "react-icons/fa"
import { MdContactPage } from "react-icons/md"
interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selected, setSelected] = useState(location.pathname)

    useEffect(() => {
        setSelected(location.pathname)
    }, [location.pathname])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuItemClick = (path: string) => {
        setSelected(path)
        setIsMenuOpen(false) // Close the menu after selecting an item
    }

    return (
        <div className={`${className} flex flex-row items-center justify-between px-5 w-[100%]`}>
            <Link to="/" onClick={() => handleMenuItemClick('/')}>
                <Logo size={40} className=''/>
            </Link>
            <TiThMenu className='hover:text-advancedLightBlue' size={32} onClick={toggleMenu}/>
            {isMenuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-advancedDarkBlue text-white flex flex-col items-center space-y-4 py-4">
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/about', label: 'About' },
                        { path: '/careers', label: 'Careers' },
                        { path: '/community', label: 'Community' },
                        { path: '/services', label: 'Services' },
                        { path: '/contact', label: 'Contact' }
                    ].map((item) => (
                        <li
                            key={item.path}
                            className={`hover:text-advancedLightBlue ${selected === item.path ? 'text-blue-500' : ''}`}
                        >
                            <Link to={item.path} onClick={() => handleMenuItemClick(item.path)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MobileNav