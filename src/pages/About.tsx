import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Component Imports
import PageBanner from '../components/pagesections/banners/PageBanner'
import AboutSection from '../components/pagesections/AboutSection'
import FocusSection from '../components/pagesections/FocusSection'
import TeamSection from '../components/pagesections/TeamSection'
import ContactSection from '../components/pagesections/ContactSection'
import TestimonialsSection from '../components/pagesections/TestimonialsSection'
import FeedbackFormSection from '../components/pagesections/FeedbackFormSection'

const About: React.FC = () => {
  useEffect(()=>{
    ReactPixel.pageView()
    ReactPixel.track('ViewContent', {
      page: 'About',
      content_ids: ['/about'],
      content_type: 'page'
    })
    ReactGA.send({ hitType: 'pageview', page: '/about', title: 'About' })
  }, [])
  
  

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
    

    return `https://d3978e1lxwwpv4.cloudfront.net/team-2022/${fileName}.jpg`
  }

  const teamMembers = [
    {
      name: 'Naomi Laboy',
      title: 'Director of Operations',
      imgUrl: nameToPngFileName('Naomi Laboy', 'Manager'),
    },
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
      name: 'Heather Hopper',
      title: 'Quality Assurance',
      imgUrl: nameToPngFileName('Heather Hopper', 'Quality Assurance'),
    }
  ]
  
  const testimonialList = [
    {
      name: 'Thankful Patient',
      content: ' I wanted to give a big shout out to the therapist that saw my loved one last Thursday. She has lived at Mary Bryant home for over 30 years and has been struggling. She was very concerned that she was going to have to leave her home because she has declined so much. She needed to meet with the director and was very emotional about needing his help. Our therapist walked in and sat down with us, and just explained that Advanced is here to help do everything possible to keep my loved one at her home, and to make her quality of life even better. It makes me emotional thinking about the team went above and beyond to make her comfortable.'
    },
    {
      name: 'Mr. Robert A.',
      content: 'Thank you for the care I received from your Advanced Healthcare Services. They listened to me and were gentle when I told them about my pain. They were there to help. The care was first class and up-to-date about the help I needed. I would recommend this agency to anyone who needed home health care. They are the best!!'
    },
    {
      name: 'Mr. Douglas B.',
      content: 'Every agency staff (members) was professional, understanding, listened and concerned about my health. This type of care is imortant to improving individual health. I will recommend this agency to anyone.'
    },
    {
      name: 'Ms. Rita K.',
      content: 'Lynn was an excellent physical therapist. She encouraged me to go to the next step. She was complimentary and always helped me to feel good about myself. I looked forwared to her visits as she was always cheerful and truly cared and attentive to any concerns I may have had.'
    },
    {
      name: 'Ms. Marianne S.',
      content: 'The care I received from Advanced Healthcare Services was exceptional from the beginning. The nurse was kind and professional. The therapist, Joe, was also kind and professional. He encouraged me and helped me advanced rapidly during my recovvery processat home. I HIGHLY recommend Advanced.'
    },
    {
      name: 'A.W. & Family',
      content: 'Dear Advanced Healthcare services, your help was so special. You brightened Mamma‘s days and shared my burdens and fears. You were a ray of sunshine. Thank you so much for your ministry. Everyone was extra helpful and kind.'
    },
    {
      name: 'Satisfied Patient',
      content: 'Everyone was so polite and courteous. If I didn’t understand something they would explain it to me. I really enjoyed all the help I had.'
    },
    {
      name: 'Ms. Mary A.',
      content: 'Excellent Care, very nice and kind health providers'
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
      <Helmet>
        <title>About | Advanced Healthcare Services, LLC.</title>
        <meta name='description' content='Learn more about Advanced Healthcare Services LLC. in Springfield, IL' />
        <meta name='author' content='Advanced Healthcare Services LLC.' />
        <meta name='keywords' content='Skilled Care, Skilled Health Care, Springfield, Illinois, Home Health, Home, Assisted Living, Long Term Care, Nurses, Physical Therapist' />
        <meta property='og:title' content='About | Advanced Healthcare Services LLC.' />
        <meta property='og:description' content='Learn more about Advanced Healthcare Services LLC. in Springfield, IL' />
        <meta property='og:image' content='https://d3978e1lxwwpv4.cloudfront.net/advanced-background-thumbnail.png' />
        <meta property='og:url' content='https://ahsllc.org/about' />
      </Helmet>
      <PageBanner 
        title='About Our Practice' 
        subtitle='Learn more about the high quality Home Healthcare we provide.'
        backgroundUrl='https://d3978e1lxwwpv4.cloudfront.net/oct-2024/companyphoto2024.png'
      />
      <AboutSection />
      <FocusSection 
        title={focusContent.title} 
        description={focusContent.description}
      />
      <TeamSection 
        team={teamMembers}
      />
      <TestimonialsSection 
        testimonials={testimonialList}
      />
      <ContactSection />
      <FeedbackFormSection />
    </>

  )
}

export default About