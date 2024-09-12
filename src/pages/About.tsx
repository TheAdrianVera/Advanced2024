import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'
import FocusSection from '../components/pagesections/FocusSection'
import TeamSection from '../components/pagesections/TeamSection'
import ContactSection from '../components/pagesections/ContactSection'

const About: React.FC = () => {

  const positionToNameExtension = (name: string, position: string) => {
    switch (true) {
      case position.includes('Administrator'):
        return 'RN-Administrator'
      case position.includes('Agency Supervisor'):
        return 'RN-Agency-Supervisor'
      case position.includes('Manager'):
        return 'Manager'
      case position.includes('Community Liaison'):
        return 'Community-Liaison'
      case position.includes('Physical Therapist Assistant'):
        return 'PTA'
      case name.includes('Jennifer Monroe'):
        return 'LPN'
      case position.includes('LPN / Quality Assurance'):
        return 'LPN-QA+'
      case position.includes('Physical Therapist'):
        return 'PT'
      case position.includes('Certified Occupational'):
        return 'COTA'
      case position.includes('MSW'):
        return 'MSW'
      case position.includes('Register Nurse'):
        return 'RN+'
      case position.includes('Quality Assurance'):
        return 'QA'
      case position.includes('Licensed Practical Nurse'):
        return 'LPN+'

    }
  }
  
  const nameToPngFileName = (name: string, position: string) => {

    const nameParts = name.split(' ')
    const nameExtension = positionToNameExtension(name, position)
    const fileName = `${nameParts.join('-')}-${nameExtension}`
    

    return `https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/team-2022/${fileName}.jpg`
  }

  const teamMembers = [
    {
      name: 'Juanita H. Jones',
      title: 'Administrator, RN, WCC',
      imgUrl: nameToPngFileName('Juanita Jones', 'Administrator, RN, WCC'),
    },
    {
      name: 'Angela Wilcoxen',
      title: 'Agency Supervisor, RN',
      imgUrl: nameToPngFileName('Angela Wilcoxen', 'Agency Supervisor, RN'),
    },
    {
      name: 'Naomi Laboy',
      title: 'Manager',
      imgUrl: nameToPngFileName('Naomi Laboy', 'Manager'),
    },
    {
      name: 'Susan Gerding',
      title: 'Community Liaison',
      imgUrl: nameToPngFileName('Susan Gerding', 'Community Liaison'),
    },
    {
      name: 'Christie Chevalier-Goleman',
      title: 'MSW, Liscensed Clinical Social Worker',
      imgUrl: nameToPngFileName('Christie Goleman', 'MSW, Liscensed Clinical Social Worker'),
    },
    {
      name: 'Ali Baker',
      title: 'Register Nurse',
      imgUrl: nameToPngFileName('Ali Baker', 'Register Nurse'),
    },
    {
      name: 'Ruff Walden',
      title: 'Physical Therapist',
      imgUrl: nameToPngFileName('Ruffin Walden', 'Physical Therapist'),
    },
    {
      name: 'Sheila Nicholson',
      title: 'Physical Therapist',
      imgUrl: nameToPngFileName('Sheila Nicholson', 'Physical Therapist'),
    },
    {
      name: 'Lynn Melocoton',
      title: 'Physical Therapist',
      imgUrl: nameToPngFileName('Lynn Melocoton', 'Physical Therapist'),
    },
    {
      name: 'Kristin Hillman',
      title: 'Physical Therapist',
      imgUrl: nameToPngFileName('Kristin Hillman', 'Physical Therapist'),
    },
    {
      name: 'Joseph Williams',
      title: 'Physical Therapist',
      imgUrl: nameToPngFileName('Joseph Williams', 'Physical Therapist'),
    },
    {
      name: 'Sue Ellen Kunz',
      title: 'Physical Therapist Assistant',
      imgUrl: nameToPngFileName('Sue Ellen Kunz', 'Physical Therapist Assistant'),
    },
    {
      name: 'Krista Summers',
      title: 'Physical Therapist Assistant',
      imgUrl: nameToPngFileName('Krista Summers', 'Physical Therapist Assistant'),
    },
    {
      name: 'Meghan Burtle',
      title: 'Certified Occupational Therapist Assistant',
      imgUrl: nameToPngFileName('Meghan Burtle', 'Certified Occupational Therapist Assistant'),
    },
    {
      name: 'Nicole Roos',
      title: 'Licensed Practical Nurse (LPN)',
      imgUrl: nameToPngFileName('Nicole Roos', 'Licensed Practical Nurse (LPN)'),
    },
    {
      name: 'Crystal Hampton',
      title: 'Licensed Practical Nurse (LPN)',
      imgUrl: nameToPngFileName('Crystal Hampton', 'Licensed Practical Nurse (LPN)'),
    },
    {
      name: 'Jennifer Monroe',
      title: 'Licensed Practical Nurse (LPN)',
      imgUrl: nameToPngFileName('Jennifer Monroe', 'Licensed Practical Nurse (LPN)'),
    },
    {
      name: 'Christina Taylor',
      title: 'LPN / Quality Assurance',
      imgUrl: nameToPngFileName('Christina Taylor', 'LPN / Quality Assurance'),
    },
    {
      name: 'Annette Castleberry',
      title: 'LPN / Quality Assurance',
      imgUrl: nameToPngFileName('Annette Castleberry', 'LPN / Quality Assurance'),
    },
    {
      name: 'Melinda Schnake',
      title: 'Quality Assurance',
      imgUrl: nameToPngFileName('Melinda Schnake', 'Quality Assurance'),
    },
    {
      name: 'Kristine Buss',
      title: 'Quality Assurance',
      imgUrl: nameToPngFileName('Kristine Buss', 'Quality Assurance'),
    },
    {
      name: 'Heather Hopper',
      title: 'Quality Assurance',
      imgUrl: nameToPngFileName('Heather Hopper', 'Quality Assurance'),
    }
  ]
  
  const testimonials = [
    {
      name: 'Satisfied Patient',
      content: 'Everyone was so polite and courteous. If I didn’t understand something they would explain it to me. I really enjoyed all the help I had.'
    },
    {
      name: 'Former Patient',
      content: 'Best home health experience ever. Kind, prompt, and informative.'
    },
    {
      name: `Former Patient's Pleased Wife`,
      content: 'Thank you for the wonderful services you provided. Ruffin did so much for my husband. He was so positive and helpful. We looked forward to his sessions.'
    },
    {
      name: 'Happy Patient',
      content: `I want to thank all of you for your love, kindness, and friendship you gave my wife and I. I've highly recommended your staff and services to several. We loved you all and appreciate all you did for us, you were wonderful and God bless you all.`
    },
    {
      name: `Patient's Niece`,
      content: 'The staff treated my Aunt as if she were part of their family. Very caring with a personal touch. Available to answer my questions. Home health at its best!'
    },
    {
      name: 'Former Patient',
      content: 'Everyone was very nice and always made sure to communicate before they were arriving. Very Professional!'
    },
    {
      name: 'Pleased Patient',
      content: 'I used this service periodically when I had a broken shoulder - and was very pleased'
    }
  ]

  const focusContent = {
    title: 'Our Focus',
    description: `Advanced Healthcare Services' primary focus is to provide individuals and their families with safe and effective quality home health care services. Care will begin within 48 hours after the request is received. We can also arrange for rental and/or or purchases of wheelchairs, walkers, special beds, or any assistive devices which may be needed. Also upon request we can coordinate other services such as finding homemakers, companions or sitters.`
  }

  return (
    <>
      <PageBanner 
        title='About Our Practice' 
        subtitle='Learn more about the high quality Home Healthcare we provide.'
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <FocusSection title={focusContent.title} description={focusContent.description} />
      <TeamSection team={teamMembers}/>
      <ContactSection />
    </>

  )
}

export default About