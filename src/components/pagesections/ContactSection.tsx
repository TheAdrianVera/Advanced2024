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
            <h1>Contact Us</h1>
            <div className='flex flex-row'>
                <div className='contact-map'>
                    <APIProvider apiKey={apiKey}>
                        <Map
                            style={{width: '50vw', height: '50vh'}}
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
    )
}

export default ContactSection