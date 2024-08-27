import React from "react"

interface PageBannerProps {
    title: string
    subtitle?: string
    button?: {
        text: string
        link: string
    }
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, button }) => {

    return (
        <div className="bg-advancedBlue text-white py-8 px-4 h-[15rem] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold mb-2 uppercase">{title}</h1>
                {subtitle && (
                     <p className="text-lg">{subtitle}</p>
                )}
            </div>
            {button && (
                <a href={button.link} className="bg-advancedNavyBlue text-white px-4 py-2 mt-4 rounded-md hover:bg-advancedLightBlue">{button.text}</a>
            )}
        </div>
    )
}

export default PageBanner