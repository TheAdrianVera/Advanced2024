import React from 'react'

interface ContactSectionProps {
    whiteAlternate?: boolean
}

const ContactSection: React.FC<ContactSectionProps> = ({whiteAlternate}) => {

    const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY || ''
    const contactSectionColorStyle = whiteAlternate ? 'bg-white text-advancedNavyBlue' : 'bg-advancedNavyBlue text-white'
    const sectionTitleStyle = whiteAlternate ? 'text-black section-title' : 'section-title'

    
    return (
        <div id='contact' className={`section ${contactSectionColorStyle} px-5 md:px-20`}>
            <div className='flex flex-col'>
                <div className='flex justify-center py-10'>
                    <h1 className={`${sectionTitleStyle}`}>Contact Us</h1>
                </div>
                <div className='flex flex-col md:flex-row py-10'>
                    <iframe
                        height="400px"
                        loading="lazy"
                        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Advanced+Healthcare+Services+Springfield`}
                        className='w-full md:w-1/2 md:mr-5'
                    >
                    </iframe>
                    <div className='contact-info mt-10 md:mt-0'>
                        <h2 className='mb-1 font-bold'>Advanced Healthcare Services LLC.</h2>
                        <p className='pb-3'>3900 Pintail Drive, Suite A <br /> Springfield, IL 62711</p>
                        <h2>Phone:</h2>
                        <p className='pb-3'><a href='tel:+12177266956' className='text-blue-500'>(217) 726-6956</a></p>
                        <h2>Fax:</h2>
                        <p className='pb-3'><a href='tel:+12177267082' className='text-blue-500'>(217) 726-7082</a></p>
                        <h2>Email:</h2>
                        <p className='pb-3'><a href='mailto:info@ahsllc.org' className='text-blue-500'>info@ahsllc.org</a></p>
                        <h2>Hours:</h2>
                        <p>Monday - Friday: 8:00 AM to 4:30 PM</p>
                        <p className='pb-3'>Saturday - Sunday: On Call</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactSection