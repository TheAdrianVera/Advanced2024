import React from 'react'
import PageBanner from '../components/pagesections/PageBanner'

const Home: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Home'  
        button={{ 
          text: 'Learn More', 
          link: ''}}
        backgroundUrl='https://advanced-healthcare-llc-web-images.s3.us-east-2.amazonaws.com/header-bg.jpg'
      />
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </>

  )
}

export default Home