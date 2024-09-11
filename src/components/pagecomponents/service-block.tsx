import React from 'react'

interface ServiceBlockProps {
    title: string
    content: string
    icon: string
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({title, content, icon}) => {
    return (
        <>
            <div>{icon}</div>
            <div>{title}</div>
            <div>{content}</div>
        </>
    )
}

export default ServiceBlock