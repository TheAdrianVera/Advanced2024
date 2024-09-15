import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './logos/Logo'
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
            <Link to="/" onClick={() => handleMenuItemClick('/')}>
                <Logo size={40} className='' />
            </Link>
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
                        className={`hover:text-advancedLightBlue ${selected === item.path ? 'text-blue-500' : ''}`}
                    >
                        <Link to={item.path} onClick={() => handleMenuItemClick(item.path)}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav