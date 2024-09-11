import React, { useState } from 'react'
import Logo from './logos/Logo'
import { TiThMenu } from "react-icons/ti"
import { Link } from 'react-router-dom'

interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={`${className} flex flex-row items-center justify-between px-5 w-[100%]`}>
            <Link to="/">
                <Logo size={40} className=''/>
            </Link>
            <TiThMenu className='hover:text-advancedLightBlue' size={32} onClick={toggleMenu}/>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-advancedBlue flex flex-col items-center justify-center z-50">
                    <button className="hover:text-rose-500 absolute top-5 right-5 text-white text-5xl"onClick={toggleMenu}>&times;</button>
                    <ul className="flex flex-col space-y-4 text-white text-2xl">
                        <li className='hover:text-advancedNavyBlue'><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li className='hover:text-advancedNavyBlue'><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li className='hover:text-advancedNavyBlue'><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
                        <li className='hover:text-advancedNavyBlue'><Link to="/community" onClick={toggleMenu}>Community</Link></li>
                        <li className='hover:text-advancedNavyBlue'><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                        <li className='hover:text-advancedNavyBlue'><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MobileNav