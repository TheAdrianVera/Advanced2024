import React, { useState, useEffect } from 'react'
import Logo from '../../logos/Logo'
import { TiThMenu } from "react-icons/ti"
import { NavLink, useLocation } from 'react-router-dom'
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
        setIsMenuOpen(!selected) // Close the menu after selecting an item
    }

    return (
        <div className={`${className} flex flex-row items-center justify-between px-5 w-[100%]`}>
            <NavLink to="/" onClick={() => handleMenuItemClick('/')}>
                <Logo size={40} className=''/>
            </NavLink>
            <TiThMenu className='hover:text-advancedLightBlue' size={32} onClick={toggleMenu}/>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-advancedBlue flex flex-col items-center justify-center z-50">
                    <button className="hover:text-rose-500 absolute top-5 right-5 text-white text-5xl"onClick={toggleMenu}>&times;</button>
                    <ul className="flex flex-col space-y-4 text-white text-2xl">
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <TiHome className="mr-2"/>
                            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                        </li>
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <PiBooksFill className="mr-2"/>
                            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                        </li>
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <FaNotesMedical className="mr-2"/>
                            <NavLink to="/careers" onClick={toggleMenu}>Careers</NavLink>
                        </li>
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <MdGroups className="mr-2"/>
                            <NavLink to="/community" onClick={toggleMenu}>Community</NavLink>
                        </li>
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <FaHandHoldingMedical className="mr-2"/>
                            <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                        </li>
                        <li className='hover:text-advancedNavyBlue flex items-center pb-2'>
                            <MdContactPage className="mr-2"/>
                            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

            )}
        </div>
    )
}

export default MobileNav