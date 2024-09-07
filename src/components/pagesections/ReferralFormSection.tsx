import React, { useState} from 'react'
import emailjs from '@emailjs/browser'

// interface FormSectionProps {}

const ReferralFormSection:React.FC = () => {
    const [isMedicareCovered, setIsMedicareCovered] = useState("yes")

    const handleMedicareChangeYes = () => {
        setIsMedicareCovered("yes")
    }

    const handleMedicareChangeNo = () => {
        setIsMedicareCovered("no")
    }

    const sendEmail = () => {
        console.log('sending email')
    }

    return (
        <div className='section bg-white'>
            <div className='flex flex-col items-center py-10'>
                {/* Form Header */}
                <div>
                    <h1 className='section-title mb-10'>Referral Form</h1>
                </div>
                {/* Referral Form */}
                <form onSubmit={sendEmail} className="max-w-lg mx-auto">
                    {/* Patient Information */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Patient Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient Name *</label>
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
                                <label className="block text-sm font-medium text-gray-700">Patient Phone *</label>
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
                        </div>
                    </fieldset>
                    {/* Referral Details */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Referral Details</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700"> What type of care is needed?</label>
                                <textarea 
                                    name="user_care_needed" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Is the Patient Covered by Medicare</label>
                                <div className="mt-1 flex items-center">
                                    <input 
                                        type="radio" 
                                        id="medicare_yes" 
                                        name="user_medicare_coverage" 
                                        value="yes" 
                                        className="mr-2"
                                        onChange={handleMedicareChangeYes}
                                    />
                                    <label htmlFor="medicare_yes" className="mr-4">Yes</label>
                                    <input 
                                            type="radio" 
                                            id="medicare_no" 
                                            name="user_medicare_coverage" 
                                            value="no" 
                                            className="mr-2"
                                            onChange={handleMedicareChangeNo}
                                        />
                                    <label htmlFor="medicare_no">No</label>
                                </div>
                            </div>
                            {isMedicareCovered === "no" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">If "No", who is the primary insurance carrier for the Patient?</label>
                                    <textarea 
                                        name="user_medicare_message_ifnot" 
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                            )}
                        </div>
                    </fieldset>
                    {/* Additional Information */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Additional Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>
                    </fieldset>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReferralFormSection























