import React from 'react'

interface WhiteLogoProps {
    size?: number
    className?: string
}

const WhiteLogo: React.FC<WhiteLogoProps>= ({size, className}) => {
    return (
        <img 
            src="/src/assets/logos/ahsllc_white_logo.png"
            alt="Advanced Healthcare LLC. Logo"
            width={size}
            height={size}
            className={className}
        />  
    )
}

export default WhiteLogo