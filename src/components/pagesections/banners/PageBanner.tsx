import React from 'react'
import ReactGA from 'react-ga4'
import { useMediaQuery } from 'react-responsive'
import ReactPixel from 'react-facebook-pixel'
import HomeScreenLogo from "../../logos/HomeScreenLogo"

interface PageBannerProps {
    title: string
    subtitle?: string
    button?: {
        text: string
        link: string
    }
    careerButton?: {
        text: string
        link: string
    }
    backgroundUrl?: string
    logo?: boolean
    logoUrl?: string
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, button, backgroundUrl, logo, logoUrl, careerButton }) => {
    const isMediumOrLarger = useMediaQuery({ query: '(min-width: 1080px)' });

    const backgroundStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}
    const companyPhotoBackgroundStyle = {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: isMediumOrLarger ? 'center -155px' : 'center'
    }
    const companyPhotoUrl = 'https://d3978e1lxwwpv4.cloudfront.net/oct-2024/companyphoto2024.png'
    const style = backgroundUrl === companyPhotoUrl ? companyPhotoBackgroundStyle : backgroundStyle;

    const handleClick = (label: string) => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: label
        })

        ReactPixel.track('ViewContent', {
            content_name: label,
            content_category: 'Home Button',
            content_type: 'Button',
            content_ids: [label]
        })
    }

    const handleCareerClick = (label: string) => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: label
        })

        ReactPixel.track('ViewContent', {
            content_name: label,
            content_category: 'Career Button',
            content_type: 'Button',
            content_ids: [label]
        })
    }

    return (
        <div
            className={`relative text-white py-8 px-4 h-[30rem] flex flex-col items-center justify-center ${backgroundUrl ? '' : 'bg-advancedBlue'}`}
            style={style}
        >
            {backgroundUrl && (
                <div className="absolute inset-0 bg-advancedLightBlue opacity-50"></div>
            )}

            {logo ? (
                <div className="relative">
                    <HomeScreenLogo url={logoUrl} size={200} className="h-32 md:h-64 w-auto"/>
                    <div className="flex flex-col justify-center items-center pt-5">
                        {subtitle && (
                            <p className="font-arial-narrow-italic text-lg sm:text-2xl md:text-3xl">{subtitle}</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 uppercase">{title}</h1>
                    {subtitle && (
                        <p className="font-arial-narrow text-xl mt-5 md:mt-10 md:text-3xl">{subtitle}</p>
                    )}
                </div>
            )}

            {careerButton && (
                <a 
                    href={careerButton.link} 
                    className="relative bg-advancedNavyBlue text-white font-arial-rounded text-lg px-8 py-4 mt-5 rounded-md hover:bg-blue-600"
                    onClick={() => handleCareerClick("Career Open Positions")}
                >
                    {careerButton.text}
                </a>
            )}

            {button && (
                <a 
                    href={button.link} 
                    className="relative bg-advancedNavyBlue text-white font-arial-rounded text-lg px-8 py-4 mt-5 rounded-md hover:bg-blue-600"
                    onClick={() => handleClick("Learn More")}
                >
                    {button.text}
                </a>
            )}
            
        </div>
    )
}

export default PageBanner