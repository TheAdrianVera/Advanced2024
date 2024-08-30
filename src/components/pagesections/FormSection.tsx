import React, { useState} from 'react'
import emailjs from '@emailjs/browser'

// interface FormSectionProps {}

const FormSection:React.FC = () => {

    const sendEmail = () => {
        console.log('sending email')
    }

    return (
        <div className='section bg-white'>

                <div className='flex flex-col items-center py-10 '>
                    <div>
                        <h1 className='section-title mb-10'>Referral Form</h1>
                    </div>

                    <form onSubmit={sendEmail} className="max-w-lg mx-auto">
                        <div>
                            <label className="block text-sm font-medium text-black-700">Patient Name *</label>
                            <input 
                                type="text" 
                                name="user_name" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Patient Email *</label>
                            <input 
                                type="email" 
                                name="user_email" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Patient Contact *</label>
                            <input 
                                type="text" 
                                name="user_phone" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Patient Address *</label>
                            <input 
                                type="text" 
                                name="user_address" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Patient City *</label>
                            <input 
                                type="text" 
                                name="user_city" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Physician</label>
                            <input 
                                type="text" 
                                name="user_physician" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Is the Patient Covered by Medicare</label>
                            <textarea 
                                name="user_medicare_message"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">If not, who is the primary insurance carrier for the Patient?</label>
                            <textarea 
                                name="user_medicare_message_ifnot" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700"> What type of care is needed?</label>
                            <textarea 
                                name="user_care_needed" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                            <input 
                                type="text" 
                                name="user_emergency_contact_name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div className='mb-5'>
                            <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone</label>
                            <input 
                                type="text" 
                                name="user_emergency_contact_phone"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div>
                            <input 
                                type="submit" 
                                value="Send"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                            />
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default FormSection