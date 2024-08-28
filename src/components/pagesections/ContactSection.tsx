import React from 'react'
import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps'

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
                    <div className='contact-map w-100vw h-50vh md:pr-10 md:w-50vw md:h-25vh'>
                        <APIProvider apiKey={apiKey}>
                            <Map
                                className='map-container'
                                defaultZoom={15}
                                defaultCenter={ { lat: 39.74320052102959, lng: -89.71238270299604 } }
                                onCameraChanged={ (ev: MapCameraChangedEvent) =>
                                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                                }
                            />
                        </APIProvider>
                    </div>
                    <div className='contact-info'>
                        <h2 className='font-bold'>Advanced Healthcare Services LLC.</h2>
                        <p className='pb-3'>3900 Pintail Drive, Suite A <br /> Springfield, IL 62711</p>
                        <h2>Phone:</h2>
                        <p className='pb-3'>(217) 726-6956</p>
                        <h2>Fax:</h2>
                        <p className='pb-3'>(217) 726-7082</p>
                        <h2>Email:</h2>
                        <p className='pb-3'>info@ahsllc.org</p>
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