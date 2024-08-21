import React from 'react'

interface LogoProps {
    size?: number
    className?: string
}

const Logo: React.FC<LogoProps>= ({size, className}) => {
    return (
        <img 
            src="/src/assets/logos/ahsllc_icon_light.png"
            alt="Advanced Healthcare LLC. Logo"
            width={size}
            height={size}
            className={className}
        />  
    )
}

export default Logo