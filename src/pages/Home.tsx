import React from 'react'
import PageBanner from '../components/PageBanner'

const Home: React.FC = () => {
  return (
    <>
      <PageBanner 
        title='Home'  
        button={{ 
          text: 'Learn More', 
          link: '' }}
      />
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </>

  )
}

export default Home