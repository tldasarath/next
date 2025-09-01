import AboutSection from "@/components/HomeSection/AboutSection";
import ClientSections from "@/components/HomeSection/ClientSections";
import HeroSection from "@/components/HomeSection/HeroSection";
import ImageTextSection from "@/components/HomeSection/ImageTextSection";
import ServiceSection from "@/components/HomeSection/ServiceSection";
import ValuesSection from "@/components/HomeSection/ValuesSection";
import Navbar from "@/components/Navbar/Navbar";
export const metadata = {
  title: 'Home | Next Media',
  description: 'Welcome to Next Media. Explore our services, gallery, clients, and more.',
  keywords: 'Next Media, Services, Gallery, Clients, Portfolio',
  openGraph: {
    title: 'Home | Next Media',
    description: 'Welcome to Next Media. Explore our services, gallery, clients, and more.',
    url: 'https://yourwebsite.com',
    images: ['/images/og-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Next Media',
    description: 'Welcome to Next Media. Explore our services, gallery, clients, and more.',
    images: ['/images/og-home.png'],
  },
}

export default function Home() {
  
  return (
    <main className="relative z-20"> 
    <Navbar/>
      <HeroSection />
      <AboutSection />
      <ServiceSection/>
      <ImageTextSection/>
      <ValuesSection/>
      <ClientSections/>
    </main>
  );
}