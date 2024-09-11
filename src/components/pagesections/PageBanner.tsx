import React from "react"

interface PageBannerProps {
    title: string
    subtitle?: string
    button?: {
        text: string
        link: string
    }
    backgroundUrl?: string
    logo?: boolean
    logoUrl?: string
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, button, backgroundUrl, logo, logoUrl }) => {
    const backgroundStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    return (
        <div
            className={`relative text-white py-8 px-4 h-[30rem] flex flex-col items-center justify-center ${backgroundUrl ? '' : 'bg-advancedBlue'}`}
            style={backgroundStyle}
        >
            {backgroundUrl && (
                <div className="absolute inset-0 bg-advancedLightBlue opacity-50"></div>
            )}

            {logo ? (
                <div className="relative">
                    <img src={logoUrl} alt="logo" className="h-32 md:h-64 w-auto"/>
                </div>
            ) : (
                <div className="relative">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 uppercase">{title}</h1>
                    {subtitle && (
                        <p className="font-arial-narrow text-2xl md:text-3xl">{subtitle}</p>
                    )}
                </div>
            )}



            {button && (
                <a href={button.link} className="relative bg-advancedNavyBlue text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
                    {button.text}
                </a>
            )}
            
        </div>
    )
}

export default PageBanner