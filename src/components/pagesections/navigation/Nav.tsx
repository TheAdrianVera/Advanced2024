import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../../logos/Logo'
interface NavProps {
    className?: string
}

const Nav: React.FC<NavProps> = ({className}) => {
    const location = useLocation()
    const [selected, setSelected] = useState(location.pathname)

    const handleMenuItemClick = (path: string) => {
        setSelected(path)
    }

    return (

        <nav className={`${className} hidden md:flex flex-row items-center justify-between w-[100%] px-20`}>
            <NavLink 
                to="/" 
                onClick={() => handleMenuItemClick('/')}
            >
                <Logo size={40} className='' />
            </NavLink>
            <ul className="flex space-x-10 text-xl">
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
                    >
                        <NavLink 
                            to={item.path}
                            className={({ isActive }) => (isActive ? 'text-blue-500 hover:text-advancedLightBlue' : 'hover:text-advancedLightBlue')}
                            onClick={() => handleMenuItemClick(item.path)}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav