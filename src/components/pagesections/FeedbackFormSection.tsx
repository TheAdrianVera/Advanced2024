import React, { useState} from 'react'
import { MdKeyboardArrowUp } from "react-icons/md"
import emailjs from '@emailjs/browser'

const FeedbackFormSection: React.FC = () => {
        const [isAnonFeedbackOpen, setIsAnonFeedbackOpen] = useState(false)
        const toggleAnonFeedbackSection = () => {
            setIsAnonFeedbackOpen(!isAnonFeedbackOpen)
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
         
                    <div className={`flex py-10 transition-opacity duration-400 ${isAnonFeedbackOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
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
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
}

export default FeedbackFormSection