import React, { useState, useRef } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md"
import emailjs from '@emailjs/browser'

const FeedbackFormSection: React.FC = () => {
        
        const [isSubmitted, setIsSubmitted] = useState(false)
        const [submissionFailed, setSubmissionFailed] = useState(false)
    
        // Toggling Feedback Form
        const [isAnonFeedbackOpen, setIsAnonFeedbackOpen] = useState(false)
        const toggleAnonFeedbackSection = () => {
            setIsAnonFeedbackOpen(!isAnonFeedbackOpen)
        }

        // Feedback Form Ref
        const form = useRef<HTMLFormElement>(null)

        //Form Variables
        const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID
        const myPublicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
        const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_FEEBACKTEMPLATE_ID

        //Declare EmailJS Service
        emailjs.init({
                publicKey: myPublicKey,
                limitRate: {
                    id: 'app',
                    throttle: 1000
                }
            },
        )

            // Form Logic
        const sendFeedbackEmail = (e: React.FormEvent) => {
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
            <div className="bg-advancedNavyBlue pb-10">
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <div 
                            className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 flex flex-row'
                            onClick={() => setIsAnonFeedbackOpen(!isAnonFeedbackOpen)}
                        >
                            <span>Anonymous Feedback Form</span>
                            <MdKeyboardArrowUp className={`inline text-2xl ml-2 transform transition-transform duration-300 ${isAnonFeedbackOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </div>
         
                    <div className={`${isSubmitted ? 'flex-col justiify-center items-center' : ''} flex py-10 transition-opacity duration-400 ${isAnonFeedbackOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                        {/* Feedback Form */}
                        {isSubmitted ? (
                            <div className='text-center'>
                                <h2 className='text-2xl font-bold text-green-500 mb-4'>Thank you for your feedback!</h2>
                                <p className='text-lg text-gray-300'>We appreciate your input and will get back to you soon.</p>
                            </div>
                        ) : submissionFailed ? (
                            <div className='text-center'>
                                <h2 className='text-2xl font-bold text-red-500 mb-4'>Oops, we had an error there!</h2>
                                <p className='text-lg text-gray-300'>We're working on it right away. Please try again later.</p>
                            </div>
                        ) : (                
                        <form ref={form} onSubmit={sendFeedbackEmail} className="max-w-lg mx-auto w-full">
                            <fieldset className='mb-6'>
                                <legend className="text-lg font-semibold mb-4 text-white">Feedback Information</legend>
                                <div className='grid grid-cols-1 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Subject</label>
                                        <input
                                            type="text"
                                            name="feedback_subject"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Date</label>
                                        <input
                                            type="date"
                                            name="feedback_date"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-8 px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Response</label>
                                        <textarea
                                            name="feedback_response"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-auto px-3 py-1"
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button>
                            </div>
                        </form>
                        )}



                    </div>

                </div>
            </div>
        )
}

export default FeedbackFormSection