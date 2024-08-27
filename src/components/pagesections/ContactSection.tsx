import React from 'react'

interface ContactSectionProps {

}

const ContactSection: React.FC = () => {
    return (
        <div className='section'>
            <h1>Contact Us</h1>
            <div className='flex flex-row'>
                <div className='contact-map'>

                </div>
                <div className='contact-info'>
                    <h2>Our Location</h2>
                    <p>123 Main St. <br /> Anytown, USA 12345</p>
                    <h2>Phone</h2>
                    <p>(123) 456-7890</p>
                    <h2>Email</h2>
                </div>
            </div>
        </div>
    )
}

export default ContactSection