import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/components/ServiceSection/Service'
import React from 'react'
export const metadata = {
  title: 'Our Services | Next Media',
  description: 'Discover the wide range of services offered by Next Media, designed to help your business grow and succeed.',
  keywords: 'Next Media, Services, Solutions, Business, Marketing, Portfolio',
  openGraph: {
    title: 'Our Services | Next Media',
    description: 'Explore Next Media’s professional services tailored for businesses, including marketing, design, and development solutions.',
    url: 'https://yourwebsite.com/service',
    images: ['/images/og-services.png'], // Replace with a representative image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Next Media',
    description: 'Explore Next Media’s professional services tailored for businesses, including marketing, design, and development solutions.',
    images: ['/images/og-services.png'], // Replace with a representative image
  },
}
export default function Service(){
  
  return (
    <div>
        <Navbar/>
      <ServicesSection/>
    </div>
  )
}


