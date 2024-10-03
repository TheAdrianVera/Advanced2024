import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
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
            <Link 
                to="/" 
                onClick={() => handleMenuItemClick('/')}
                className={selected === '/' ? 'selected-class' : ''}    
            >
                <Logo size={40} className='' />
            </Link>
            <div className='flex space-x-10 text-2xl'>
                <Link 
                    to="/careers" 
                    onClick={() => handleMenuItemClick('/careers')} 
                    className={`hover:text-advancedLightBlue ${selected === '/careers' ? 'text-blue-500' : ''}`}
                >
                    Careers
                </Link>
            </div>
        </nav>
    )
}

export default NavCareerOpenings