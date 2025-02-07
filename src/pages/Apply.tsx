import React from 'react'

import PageBanner from '../components/pagesections/banners/PageBanner'
import ApplySection from '../components/pagesections/ApplySection'
interface ApplyProps {
    position: string
}

const Apply: React.FC<ApplyProps> = ({position}) => {
    
    return (
        <>
            <PageBanner title={`${position} APPLICATION`} backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/header-bg.jpg'/>
            <ApplySection position={position} />
        </>
    )   
}

export default Apply