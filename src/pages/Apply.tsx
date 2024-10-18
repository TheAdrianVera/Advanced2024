import React from 'react'

import PageBanner from '../components/pagesections/banners/PageBanner'
import ApplySection from '../components/pagesections/ApplySection'
interface ApplyProps {
    id: number
    position: string
}

const Apply: React.FC<ApplyProps> = ({id, position}) => {
    
    return (
        <>
            <PageBanner title={`${position} APPLICATION`} backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'/>
            <ApplySection />
        </>
    )   
}

export default Apply