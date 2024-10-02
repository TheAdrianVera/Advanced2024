import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { SiIndeed } from "react-icons/si"

const Footer = () => {
    return (
        <footer className="bg-advancedDarkBlue text-white py-4">
            <div className="container mx-auto flex justify-center">
                <div className="flex flex-col md:flex-row">
                    <p className="text-sm mr-2">
                        &copy; {new Date().getFullYear()} Advanced Healthcare Services, LLC. 
                    </p>
                    <div className="flex flex-row items-center text-sm mr-3">
                        Social Links: 
                        <a href='https://www.linkedin.com/company/advanced-healthcare-services-llc/posts/?feedView=all' target='_blank' rel='noreferrer' className='ml-1 mr-3'>
                            <FaLinkedin size={16} className='hover:text-blue-300' />
                        </a>
                        <a href='https://www.facebook.com/AHSLLC.ORG' target='_blank' rel='noreferrer' className='mr-3'>
                            <FaFacebook size={16} className='hover:text-blue-300' />
                        </a>
                        <a href='https://www.indeed.com/cmp/Advanced-Healthcare-Services-LLC/jobs' target='_blank' rel='noreferrer'>
                            <SiIndeed size={16} className='hover:text-blue-300' />
                        </a>
                    </div>
                    <a href= "" className="text-sm mr-2 hover:text-blue-300">Privacy.</a>
                    <p className="text-sm">
                        Web Dev:
                        <a href="https://www.adriangvera.com" target="_blank" className="text-white hover:text-blue-300 underline ml-1">adriangvera.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer