import React from 'react'

const CoverageAreasSection: React.FC = () => {
    return (
        <div className='section bg-advancedNavyBlue text-white px-5 md:px-20 px-5 md:px-20'>
            <div className='flex flex-col items-center py-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='section-title mb-10'>Coverage Areas</h1>
                    <h2 className='text-xl font-arial-narrow md:text-2xl text-gray-200 mb-6'>Illinois Counties We Cover</h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-[50%]'>
                    <ul>
                        <li id="brown">
                            <h5>Brown</h5>
                        </li>
                        <li id="cass">
                            <h5>Cass</h5>
                        </li>
                        <li id="christian">
                            <h5>Christian</h5>
                        </li>
                        <li id="logan">
                            <h5>Logan</h5>
                        </li>
                        <li id="macon">
                            <h5>Macon</h5>
                        </li>
                        <li id="macoupin">
                            <h5>Macoupin</h5>
                        </li>
                        <li id="mason">
                            <h5>Mason</h5>
                        </li>
                        <li id="menard">
                            <h5>Menard</h5>
                        </li>
                        <li id="montgomery">
                            <h5>Montgomery</h5>
                        </li>
                        <li id="morgan">
                            <h5>Morgan</h5>
                        </li>
                        <li id="sangamon">
                            <h5>Sangamon</h5>
                        </li>
                        <li id="schuyler">
                            <h5>Schuyler</h5>
                        </li>
                        <li id="scott">
                            <h5>Scott</h5>
                        </li>
                    </ul>
                </div>
                <div className='w-[50%]'>   
                    MAP SECTION
                </div>
            </div>
        </div>
    )
}

export default CoverageAreasSection