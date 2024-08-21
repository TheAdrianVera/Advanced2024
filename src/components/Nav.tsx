import React from 'react'

interface NavProps {
    className?: string
}

const Nav: React.FC<NavProps> = ({className}) => {
    return (
        <div className={`${className}`}>NAV BAR</div>
    )
}

export default Nav