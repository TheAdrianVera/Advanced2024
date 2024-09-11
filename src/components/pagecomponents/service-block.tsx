import React from 'react'

interface ServiceBlockProps {
    title: string
    content: string
    icon: string
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({title, content, icon}) => {
    return (
        <div className='flex flex-col w-[100%] md:w-[25% px-2 py-5 md:py-2'>
            <div>{icon}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}

export default ServiceBlock