import React from 'react'
import { 
    Marker,
    APIProvider, 
    Map
} from '@vis.gl/react-google-maps'

interface ContactSectionProps {}

type Poi ={ 
    key: string, 
    location: google.maps.LatLngLiteral, 
    label?: string,
    labelColor?: string
}

const containerStyle = {
    width: '800px',
    height: '400px'
}

const locations: Poi[] = [
    {
        key: "Advanced Healthcare LLC.", 
        location: {lat: 39.74320052102959, lng: -89.71238270299604},
        label: `Advanced \nHealthcare LLC.`,
        labelColor: "#FF0000",
    }
]

const PoiMarkers = (props: {pois: Poi[]}) => {
    return (
        <>
            {props.pois.map((poi: Poi) => (
                <Marker
                    key={poi.key}
                    position={poi.location}
                    label={{ 
                        text: poi.label || '', 
                        color: poi.labelColor,
                        className: 'marker-label'
                    }}
                />
            ))}
        </>
    )
}

const ContactSection: React.FC = () => {
    const apiKey = 'AIzaSyAZXGtGLFPg67JJm4IyKqQjx8Plgdx4whI'

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
                            >
                                <PoiMarkers pois={locations} />
                            </Map>
                        </APIProvider>
                    </div>
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