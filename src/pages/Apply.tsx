import React from 'react'

import PageBanner from '../components/pagesections/banners/PageBanner'

interface ApplyProps {

}

const Apply: React.FC<ApplyProps> = () => {
    
    return (
        <>
            <PageBanner title='APPLY' backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'/>
            <div className='section text-center'>
                <p>APPLY TODAY!</p>
            </div>
        </>
    )   
}

export default Apply