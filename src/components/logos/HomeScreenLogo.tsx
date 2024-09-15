import React from 'react'

interface HomeScreenLogoProps {
    size?: number
    className?: string
    url?: string
}

const HomeScreenLogo: React.FC<HomeScreenLogoProps>= ({size, className, url}) => {
    return (
        <img 
            src={url}
            alt="Advanced Healthcare LLC. Logo"
            width={size}
            height={size}
            className={className}
        />  
    )
}

export default HomeScreenLogo