import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ApplySection: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submissionFailed, setSubmissionFailed] = useState(false)
    const [resumeError, setResumeError] = useState('')
    const [coverLetterError, setCoverLetterError] = useState('')

    // Referral Form Ref
    const form = useRef<HTMLFormElement>(null)

    // Form Variables
    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID
    const myPublicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_APPLICATION_ID

    // Declare EmailJS Service
    emailjs.init({
            publicKey: myPublicKey,
            limitRate: {
                id: 'app',
                throttle: 1000
            }
        },
    )

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<string>>) => {
        const file = event.target.files?.[0]
        if (file && file.size > 500 * 1024) { // 500 KB size limit
            setError('File size should not exceed 500 KB')
        } else {
            setError('')
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('submitting form ...')
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
        <div className='section'>
            <div className='flex flex-col items-center py-10'>
                {/* Form Header */}
                <div>
                    <h1 className='section-title mb-10 text-center'>Submit Application</h1>
                </div>
                {/* Referral Form */}
                {isSubmitted ? (
                    <div className='text-center'>
                        <p>Thank you for your submission!</p>
                        <p>We will be in touch shortly.</p>
                    </div>
                ) : submissionFailed ? (
                    <div className='text-center'>
                        <p>Submission failed. Please try again.</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={handleSubmit} className='w-full max-w-lg'>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                type='text'
                                name='user_name'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                type='email'
                                name='user_email'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='resume'>
                                Resume (PDF or Word)
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='resume'
                                type='file'
                                name='user_resume'
                                accept='.pdf,.doc,.docx'
                                required
                                onChange={(e) => handleFileChange(e, setResumeError)}
                            />
                            {resumeError && <p className='text-red-500 text-xs italic'>{resumeError}</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='cover_letter'>
                                Cover Letter (Optional)
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='cover_letter'
                                type='file'
                                name='user_cover_letter'
                                accept='.pdf,.doc,.docx'
                                onChange={(e) => handleFileChange(e, setCoverLetterError)}
                            />
                            {coverLetterError && <p className='text-red-500 text-xs italic'>{coverLetterError}</p>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ApplySection