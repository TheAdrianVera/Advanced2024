import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'
import BenefitsSection from '../components/pagesections/BenefitsSection'
import ContactSection from '../components/pagesections/ContactSection'

const benefitsData = [
  {
    title: 'Retirement Savings Plan',
    content: 'We want to prepare our team for the future and help them accomplish that by setting them up with a 401K retirement plan.',
    iconLabel: 'retire'
  },
  {
    title: 'Life Insurance',
    content: 'We also want to make sure our team is insured incase of tragedy and offer excellent life insurance.',
    iconLabel: 'insurance'
  },
  {
    title: 'Paid Time Off',
    content: 'We want to make sure our team can have plenty of time to recharge and offer up to 5 weeks of PTO.',
    iconLabel: 'pto'
  },
  {
    title: 'Maternity Leave',
    content: `We want to be supportive to the mother's on our team and offer Maternity Leave for any excepting mothers.`,
    iconLabel: 'maternity'
  },
  {
    title: 'Health Care',
    content: 'We have great health care coverage availible to our team which includes dental and many ancillary benefits like vision or disability.',
    iconLabel: 'hc'
  },
  {
    title: 'Mileage Reimbursement',
    content: 'We offer our team milage reimbursement for any miles driven for any work purposes.',
    iconLabel: 'mileage'
  },
  {
    title: 'Mentorship',
    content: `We have amazing mentorship opporunties availible to members of our team, and nurture a community of mentorship.`,
    iconLabel: 'mentorship'
  },
  {
    title: 'Job Training',
    content: 'For new and existing members of the team we offer many opportunities to receive additional job traiing in order to further your career.',
    iconLabel: 'training'
  }
]

const Careers: React.FC = () => {

  return (
    <>
      <PageBanner 
        title='Careers at Advanced' 
        subtitle='Join our Advanced team and make a difference.' 
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <BenefitsSection benefitsData={benefitsData}/>
      <ContactSection />
    </>

  )
}

export default Careers