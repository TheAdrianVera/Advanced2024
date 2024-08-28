import React from 'react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

interface ContactSectionProps {

}

const containerStyle = {
    width: '800px',
    height: '400px'
}

const ContactSection: React.FC = () => {
    const apiKey = 'AIzaSyAZXGtGLFPg67JJm4IyKqQjx8Plgdx4whI';

    return (
        <div className='section'>
            <div className='flex flex-col'>
                <div className='flex justify-center py-10'>
                    <h1 className='section-title'>Contact Us</h1>
                </div>
                <div className='flex flex-col md:flex-row py-10'>
                    <div className='contact-map md:pr-10 w-100vw h-50vh md:w=50vw'>
                        <APIProvider apiKey={apiKey}>
                            <Map
                                className='map-container'
                                defaultCenter={{lat: 22.54992, lng: 0}}
                                defaultZoom={3}
                                gestureHandling={'greedy'}
                                disableDefaultUI={true}
                            />
                        </APIProvider>
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
        </div>
    )
}

export default ContactSection