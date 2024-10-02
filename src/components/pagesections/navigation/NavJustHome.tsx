import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Logo from '../../logos/Logo'

interface NavJustHomeProps {
    className?: string
}

const NavJustHome: React.FC<NavJustHomeProps> = ({className}) => {
    const location = useLocation()
    const [selected, setSelected] = useState(location.pathname)
    const handleMenuItemClick = (path: string) => {
        setSelected(path)
    }

    return (
        <nav className={`${className} hidden md:flex flex-row items-center justify-between w-[100%] px-20`}>
            <Link 
                to="/" 
                onClick={() => handleMenuItemClick('/')}
                className={selected === '/' ? 'selected-class' : ''}    
            >
                <Logo size={40} className='' />
            </Link>
        </nav>
    )
}

export default NavJustHome