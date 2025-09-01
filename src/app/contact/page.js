import ContactPage from '@/components/ContactSection/Contact'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
export const metadata = {
  title: 'Contact | Next Media',
  description: 'Get in touch with Next Media for queries, support, or collaboration opportunities.',
  keywords: 'Next Media, Contact, Support, Collaboration',
  openGraph: {
    title: 'Contact | Next Media',
    description: 'Get in touch with Next Media for queries, support, or collaboration opportunities.',
    url: 'https://yourwebsite.com/contact',
    images: ['/images/og-contact.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Next Media',
    description: 'Get in touch with Next Media for queries, support, or collaboration opportunities.',
    images: ['/images/og-contact.png'],
  },
}

export default function contact(){
  return (
    <div>
        <Navbar/>
      <ContactPage/>
    </div>
  )
}


