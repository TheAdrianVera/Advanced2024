import React, {useState} from 'react'
import Cookies from 'js-cookie'

const PrivacySection: React.FC = () => {
    const [consent, setConsent] = useState(Cookies.get('cookie-consent') === 'accepted');

    const handleToggle = () => {
        const newConsent = !consent;
        setConsent(newConsent);
        Cookies.set('cookie-consent', newConsent ? 'accepted' : 'declined', { expires: 365 });
    };

    return (
        <div className='section px-5 md:px-20 bg-white pb-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-4'>Privacy Settings</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-800 mb-6'>Handle Your Data Sharing</h2>
                </div>
            </div>
            <div className='flex flex-col items-center pb-20'>
                <p className='text-center text-gray-700 mb-6'>
                    We value your privacy and do not share your information with third parties. However, if you prefer not to share your data, you have the control to opt out.
                </p>
                <div className='flex items-center'>
                    <span className='mr-2 text-gray-700'>Opt-In to Data Sharing:</span>
                    <button
                        onClick={handleToggle}
                        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${consent ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                        <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform ${consent ? 'translate-x-6' : 'translate-x-0'}`}
                        ></div>
                    </button>
                </div>
                <p className='mt-4 text-gray-700'>
                    You have {consent ? 'opted in' : 'opted out'} to data sharing.
                </p>
            </div>
        </div>
    )
}

export default PrivacySection