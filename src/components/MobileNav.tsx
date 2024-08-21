import React from 'react'

interface MobileNavProps {
    className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
    return (
        <div className={className}> MOBILE NAV </div>
    )
}

export default MobileNav