import Gallery from '@/components/GallerySection/Gallery'
import Navbar from '@/components/Navbar/Navbar'
import SEO from '@/components/SEO/Seo'
import React from 'react'
export const metadata = {
  title: "Our Gallery | Next Media",
  description: "Explore our gallery showcasing amazing projects and moments captured in high-quality images at Next Media.",
  openGraph: {
    title: "Our Gallery | Next Media",
    description: "Dive into Next Media's gallery featuring high-quality images of our projects, events, and achievements.",
    url: "https://yourwebsite.com/gallery",
    images: ["/images/gallery/Gallery1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Gallery | Next Media",
    description: "Check out Next Media's gallery with stunning visuals of our projects and events.",
    images: ["/images/gallery/Gallery1.png"],
  },
};

export default function GalleryPage(){
  return (
    <div>
        
        <Navbar/>
      <Gallery/>
    </div>
  )
}


