import React from "react"

interface PageBannerProps {
    title: string
    subtitle?: string
    button?: {
        text: string
        link: string
    }
    backgroundUrl?: string
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, button, backgroundUrl }) => {
    const backgroundStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    return (
        <div
            className={`relative text-white py-8 px-4 h-[15rem] flex flex-col items-center justify-center ${backgroundUrl ? '' : 'bg-advancedBlue'}`}
            style={backgroundStyle}
        >
            {backgroundUrl && (
                <div className="absolute inset-0 bg-advancedLightBlue opacity-50"></div> // Change this line for different overlay colors and opacities
            )}

            <div className="relative">
                <h1 className="text-4xl font-bold mb-2 uppercase">{title}</h1>
                {subtitle && (
                    <p className="text-lg">{subtitle}</p>
                )}
            </div>

            {button && (
                <a href={button.link} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 z-30">
                    {button.text}
                </a>
            )}
            
        </div>
    )
}

export default PageBanner