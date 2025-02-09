import React, {useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import Logo from '../../logos/Logo'

interface NavCareerOpeningsProps {
    className?: string
}

const NavCareerOpenings: React.FC<NavCareerOpeningsProps> = ({className}) => {
    const location = useLocation()
    const [selected, setSelected] = useState(location.pathname)
    const handleMenuItemClick = (path: string) => {
        setSelected(path)
    }

    return (
        <nav className={`${className} flex flex-row items-center justify-between w-[100%] px-20`}>
            <NavLink 
                to="/" 
                onClick={() => handleMenuItemClick('/')}
                className={selected === '/' ? 'selected-class' : ''}    
            >
                <Logo size={40} className='' />
            </NavLink>
            <div className='flex space-x-10 text-2xl'>
                <NavLink 
                    to="/careers" 
                    onClick={() => handleMenuItemClick('/careers')}
                    className={({isActive}) => (isActive ? 'text-blue-500 hover:text-advancedLightBlue' : 'hover:text-advancedLightBlue' ) }
                >
                    Careers
                </NavLink>
            </div>
        </nav>
    )
}

export default NavCareerOpenings