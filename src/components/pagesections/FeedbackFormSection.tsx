import React, { useState} from 'react'
import emailjs from '@emailjs/browser'

const FeedbackFormSection: React.FC = () => {

        return (

            <div className="bg-advancedNavyBlue pb-10">
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <div className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600'>
                            Anonymous Feedback Form
                        </div>
                    </div>
                    <div className='flex py-10'>
                        <form className="max-w-lg mx-auto">
                            <fieldset className='mb-6'>
                                <legend className="text-lg font-semibold mb-4 text-white">Feedback Information</legend>
                                <div className='grid grid-cols-1 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Subject</label>
                                        <input
                                            type="text"
                                            name="feedback_subject"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Date</label>
                                        <input
                                            type="date"
                                            name="feedback_date"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200">Feedback Response</label>
                                        <textarea
                                            name="feedback_response"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        )
}

export default FeedbackFormSection