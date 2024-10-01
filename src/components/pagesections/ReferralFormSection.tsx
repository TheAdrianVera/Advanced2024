import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// interface FormSectionProps {}

const ReferralFormSection:React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submissionFailed, setSubmissionFailed] = useState(false)

    // Referral Form Ref
    const form = useRef<HTMLFormElement>(null)

    // Form Variables
    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID
    const myPublicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY

    // Form State Variables
    const [isMedicareCovered, setIsMedicareCovered] = useState("yes")

    // Form Handlers
    const handleMedicareChangeYes = () => {
        setIsMedicareCovered("yes")
    }
    const handleMedicareChangeNo = () => {
        setIsMedicareCovered("no")
    }

    // Decalre EmailJS Service
    emailjs.init({
            publicKey: myPublicKey,
            limitRate: {
                id: 'app',
                throttle: 1000
            }
        },
    )

    // Form Logic
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('sending email ...')
        if (form.current) {
            emailjs.sendForm(serviceId, templateId, form.current, myPublicKey)
                .then((result) => {
                    console.log("Success!!", result.text)
                    setIsSubmitted(true)
                }, (error) => {
                    console.log("Failed :(", error.text)
                    setSubmissionFailed(true)
                })
        }
    }

    return (
        <div className='section bg-white'>
            <div className='flex flex-col items-center py-10'>
                {/* Form Header */}
                <div>
                    <h1 className='section-title mb-10 text-center'>Referral Form</h1>
                </div>
                {/* Referral Form */}
                {isSubmitted ? (
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-green-500 mb-4'>Thank you for your feedback!</h2>
                        <p className='text-lg text-gray-700'>We appreciate your input and will get back to you soon.</p>
                    </div>
                ) : submissionFailed ? (
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-red-500 mb-4'>Oops, we had an error there!</h2>
                        <p className='text-lg text-gray-300'>We're working on it right away. Please try again later.</p>
                    </div>
                ) : (
                <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
                    {/* Patient Information */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Patient Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            {/* Patient Name - Requried */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient Name *</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                    required
                                />
                            </div>
                            {/* Patient Email - Requried */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient Email *</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                    required
                                />
                            </div>
                            {/* Patient Phone - Requried */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient Phone *</label>
                                <input 
                                    type="text" 
                                    name="user_phone" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                    required
                                />
                            </div>
                            {/* Patient Address - Required */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient Address *</label>
                                <input 
                                    type="text" 
                                    name="user_address" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                    required
                                />
                            </div>
                            {/* Patient City - Requried */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Patient City *</label>
                                <input 
                                    type="text" 
                                    name="user_city" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                    required
                                />
                            </div>
                            {/* Patient Physician */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Physician</label>
                                <input 
                                    type="text" 
                                    name="user_physician" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                />
                            </div>
                        </div>
                    </fieldset>
                    {/* Referral Details */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Referral Details</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Type of Care Needed */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700"> What type of care is needed?</label>
                                <textarea 
                                    name="user_care_needed" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-auto px-3 py-1"
                                />
                            </div>
                            {/* Covered By Medicare - Y/N */}
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
                            {/* Medicare Covered Section */}
                            {isMedicareCovered === "no" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">If "No", who is the primary insurance carrier for the Patient?</label>
                                    <textarea 
                                        name="user_medicare_message_ifnot" 
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-auto py-1 px-3"
                                    />
                                </div>
                            )}
                        </div>
                    </fieldset>
                    {/* Additional Information */}
                    <fieldset className="mb-6">
                        <legend className="text-lg font-semibold mb-4">Additional Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Emergency Contact Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                                <input 
                                    type="text" 
                                    name="user_emergency_contact_name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                />
                            </div>
                            {/* Emergency Contact Phone */}
                            <div className='mb-5'>
                                <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone</label>
                                <input 
                                    type="text" 
                                    name="user_emergency_contact_phone"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                />
                            </div>
                        </div>
                    </fieldset>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button>
                    </div>
                </form>
                )}
            </div>
        </div>
    )
}

export default ReferralFormSection























