import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ApplySection: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submissionFailed, setSubmissionFailed] = useState(false)

    // Referral Form Ref
    const form = useRef<HTMLFormElement>(null)

    // Form Variables
    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID
    const myPublicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (form.current) {
            const formData = new FormData(form.current)
            const name = formData.get('user_name')
            const email = formData.get('user_email')
            const resume = formData.get('user_resume') as File

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Resume File Name:', resume.name)

            setIsSubmitted(true)
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
                            />
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
                            />
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