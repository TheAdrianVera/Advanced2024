import React from 'react'

import PageBanner from '../components/pagesections/banners/PageBanner'

import {companyInfo} from '../data/jobs.ts'

interface PositionProps {
    id: number
    position: string
    department: string
    description?: string
    acroynm: string 
    path: string
    type: string
    city: string
    state: string
    text: string
    linkedInUrl: string
    qualifitions: string[]
    responsibilities?: string[]
    lifting?: string[]
}

const Position: React.FC<PositionProps> = ({id, position, department, description, acroynm, qualifitions, linkedInUrl, responsibilities, lifting}) => {
    const company = companyInfo[0]

    return (
        <>
            <PageBanner title={position} backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'/>
            <div className='job section text-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1>{position} - {acroynm}</h1>
                    <h3>{company.industry}</h3>
                    <h3>{department}</h3>
                    <h2>Job Description</h2>
                    {company.intro.map((passage, index) => {
                        return (
                            <p key={index}>{passage}</p>
                        )
                    })}
                    <h2>Company Description:</h2>
                    <p>{company.description}</p>
                    <h2>What We Offer:</h2>
                    <ul>
                        {company.offerings.map((offer, index) => {
                            return (
                                    <li key={index}>{offer}</li>
                            )
                        })}
                    </ul>
                    {description && (
                        <>
                            <h2>Position Description:</h2>
                            <p>{description}</p>
                        </>
                    )}
                    <h2>Qualifications:</h2>
                    <ul>
                        {qualifitions.map((qualifitcation, index) => {
                            return (
                                <li key={index}>{qualifitcation}</li>
                            )
                        })}
                    </ul>
                    {responsibilities && (
                        <>
                            <h2>Responsibilities:</h2>
                            <ul>
                                {responsibilities.map((responsibility, index) => {
                                    return (
                                        <li key={index}>{responsibility}</li>
                                    )
                                })}
                            </ul>
                        </>
                    )}
                    {lifting && (
                        <>
                            <h2>Lifting Requirements:</h2>
                            <ul>
                                {lifting.map((requirement, index) => {
                                    return (
                                        <li key={index}>{requirement}</li>
                                    )
                                })}
                            </ul>
                        </>
                    )}
                    <h2>Benefits:</h2>
                    <ul>
                        {company.benefits.map((benefit, index) => {
                            return (
                                <li key={index}>{benefit}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className="mt-10 flex flex-col">
                        <a href="" className="mb-5">Apply - {id}</a>
                        <a href={linkedInUrl} target="_blank">Apply on LinkedIn</a></div>
                    </div>
                </div>
        </>
    )
}

export default Position