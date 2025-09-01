
import AboutUs from '@/components/AboutSection/AboutUs'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

  export const metadata = {
  title: 'About Us | Next Media',
  description: 'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
  keywords: 'Next Media, About Us, Mission, Vision, Team',
  openGraph: {
    title: 'About Us | Next Media',
    description: 'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
    url: 'https://yourwebsite.com/about',
    images: ['/images/og-about.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Next Media',
    description: 'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
    images: ['/images/og-about.png'],
  },
}
export default function aboutus(){

  return (
    <div>
        <Navbar/>
      <AboutUs/>
    </div>
  )
}


